import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const Categories = {
    findAll: async () => {
        return await prisma.category.findMany()
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
    findCategories: async () => {
        return await prisma.category.findMany({
            where:{
                OR:[
                    {name:"Celulares e Telefones"},
                    {name:"Eletrônicos, Áudio e Vídeo"},
                    {name:"Games"},
                    {name:"Câmeras e Acessórios"}
                ]
            },
            select:{
                name:true
            }
        })
    }
}