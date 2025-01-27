import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server"

export const createProject = async (data) => {
    const {userId,orgId } = auth()

    if(!userId || !orgId){
        throw new Error("User Not Authorized")
    }

    const {data:members} = await clerkClient().organizations.getOrganizationMembershipList({organizationId: orgId});

    const userMember = members.find(member => member.publicUserData.userId === userId);

    if(!userMember || !userMember.role == "org:admin"){
        throw new Error("User Not Authorized To Create Project")
    }
    
    try {
        const project =  await db.project.create({
            data:{
                name: data.name,
                key: data.key,
                description: data.description,
                organizationId: orgId
            }
        })
        return project
    } catch (error) {
        console.log(error);
        
    }


    
}