"use server";

const { db } = require("@/lib/prisma");
const { useUser } = require("@clerk/nextjs");
const { auth, clerkClient } = require("@clerk/nextjs/server");

export const getOrganization = async (slug) => {
    const {userId} =  auth();
    
    if(!userId){
        throw new Error("User not logged in");
    }

    const user = await db?.user?.findFirst({
        where: {
            clerkUserid: userId
        }
    })
    if(!user){
        throw new Error("User not found");
    }

    const organization = await clerkClient().organizations.getOrganization({slug});
    if(!organization){
        throw new Error("Organization not found");
    }

    const {data: organizationMembers} = await clerkClient().organizations.getOrganizationMembershipList({organizationId: organization.id});

    const member = organizationMembers.find(member => member.publicUserData.userId === userId);
    if(!member){
        throw new Error("User not a member of organization");
    }

    return organization;
}