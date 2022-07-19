import { PrismaClient } from '@prisma/client'
import { json } from 'stream/consumers';
const prisma = new PrismaClient()

export const Order = {
    newOrder: async (user_id:number, product_id:number)=>{
        return await prisma.order.create({
            data:{
                id_product:product_id,
                id_user:user_id
            }
        })
    },

    findOrdersByUser: async (user_id:number)=>{
        const user = await prisma.user.findUnique({
            where:{
                id:user_id
            }
        });

        const orders = await prisma.order.findMany({
            where:{
                id_user:user_id
            },
            select:{
                product:{
                    select:{
                        id:true,
                        title:true,
                        price:true,
                        available_quantity:true,
                        category:true
                    }
                }
            }
        })

        const json = {
            "User": user?.name,
            "Orders": orders
        }

        return json 
    }
};