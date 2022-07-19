import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export const User = {
    findOne:async (email:string) => {
        return await prisma.user.findFirst({where:{
            email
        }});
    },

    create:async (name:string, email:string, password:string) => {
        return await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
    },

    findOneUser:async (email:string,password:string) => {
        return await prisma.user.findMany({where:{email, password}})
    },

    findAll:async () => {
        return await prisma.user.findMany({
            select: {
                email: true,
                name: true,
              }
        });
    }
};