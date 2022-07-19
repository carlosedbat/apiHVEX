import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const Products = {
    findAll: async () => {
        return await prisma.product.findMany()
    },

    findByCategory: async (categoryName: string) => {
        return await prisma.product.findMany({
            where:{
                category:{
                    name:categoryName
                }
            }
        })
    },

    findByCategory_LowPrice: async (categoryName: string) => {
        return await prisma.product.findMany({
            where:{
                category:{
                    name:categoryName
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