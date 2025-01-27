import { db } from "../prisma"
import { currentUser } from "@clerk/nextjs/server";
export const checkUser = async () => {

    const user = await currentUser()
    if(!user){
        return null
    }

    try {
        const isLoggedIn = await db?.user?.findFirst({
            where: {
                clerkUserid: user.id
            }
        })

        if(!isLoggedIn){
            let name = `${user.firstName} ${user.lastName}`
            const newUser = await db?.user?.create({
                data: {
                    clerkUserid: user.id,
                    email: user.emailAddresses[0].emailAddress,
                    name: name,
                    imageUrl: user.imageUrl
                }
            })

            return newUser;
        }

        return isLoggedIn;
    } catch (error) {
        console.log(error);
        
    }
    
}