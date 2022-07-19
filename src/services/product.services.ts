import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const Products = {
    findAll: async () => {
        return await prisma.product.findMany()
    },

    findByCategory: async (categoryID: number) => {
        return await prisma.product.findMany({
            where:{
                category:{
                    id:categoryID
                }
            }
        })
    },

    findByCategory_LowPrice: async (categoryID: number) => {
        return await prisma.product.findMany({
            where:{
                category:{
                    id:categoryID
                }
            },
            orderBy:[
                {
                    price:'asc'
                }
            ]
        })
    },

    findById:async (idProduct:number) => {
        return await prisma.product.findUnique({
            where:{
                id:idProduct
            }
        })
    }
}