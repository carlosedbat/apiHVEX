import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import dotenv from 'dotenv';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.KEY_API as string
});

dotenv.config();

const ClearBD = async (name: string, title: string) => {
    await prisma.user.deleteMany();
    await prisma.category.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();

    const category = await prisma.category.create({
        data: {
            name: name
        }
    });
}

const CreateNewCategory = async (name:string) => {
    const category = await prisma.category.create({
        data:{
            name
        }
    })
    return category
};

type ProductType = {
    title:string;
    price:number;
    quantity:number;
    category: number;
}

const CreateNewProduct =async (data:ProductType) => {
    const Product = await prisma.product.create({
        data:{
            title: data.title,
            price: data.price,
            available_quantity: data.quantity,
            id_category: data.category
        }
    })
}

const GetDataFromAPI = async () => {
    const response = await api.get('');
    let categories = response.data.categories
    for (let i = 0; i < categories.length; i++) {
        let categoryName = categories[i].name
        
        let categoryId:number = (await CreateNewCategory(categoryName)).id

        const response2 = await api.get('/search?category=' + categories[i].id)
        let category = response2.data.results
        for (let j = 0; j < 4; j++) {
            let title:string = category[j].title
            let price:number = category[j].price
            let quantity:number = category[j].available_quantity
            let dataProduct = {
                title,
                price,
                quantity,
                category: categoryId
            }
            let productItem = await CreateNewProduct(dataProduct)
        }
    }
}

GetDataFromAPI();