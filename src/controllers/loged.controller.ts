import {Request, Response, Router} from 'express';
import JWT from 'jsonwebtoken';
import { Products } from '../services/product.services';
import { Categories } from '../services/categories.services';
import { Order } from '../services/order.service';

export const getProducts = async (req:Request,res:Response)=>{
    let products = await Products.findAll()
    res.json(products)
};

export const categories = async (req:Request,res:Response)=>{
    let categories = await Categories.findCategories()
    res.json(categories)
};

export const allCategories = async (req:Request,res:Response)=>{
    let categories = await Categories.findAll()
    res.json(categories)
};

export const productByCategory = async (req:Request,res:Response)=>{
    let categoryParam = req.params.category
    let filterParam = req.params.filter as string

    console.log(filterParam)
    if(filterParam!=undefined){
        if(filterParam=="price"){
            let category = await Products.findByCategory_LowPrice(categoryParam)
            res.json(category)
        } else {
            res.json({
                error:"Bad request."
            })
        }
        
    } else {
        let category = await Products.findByCategory(categoryParam)
        res.json(category)
    }
      
};

export const produtoById = async (req:Request,res:Response)=>{
    let product_id_param:number = parseInt(req.params.id as string)
    let product_selected = await Products.findById(product_id_param)
    res.json(product_selected)
};

export const products_low_price = (req:Request,res:Response)=>{

};

export const Pedido = async (req:Request,res:Response)=>{
    let CliendID:number = parseInt(req.body.client as string)
    try {
        const orders = await Order.findOrdersByUser(CliendID)
        res.json(orders)
    } catch (error) {
        res.status(404).json({"error":error})
    }
    
};

export const newOrder = async (req:Request,res:Response)=>{
    let productID:number = parseInt(req.body.product as string)
    let clientID:number = parseInt(req.body.client as string)
    
    try {
        const orderCreated = await Order.newOrder(clientID,productID)
        res.status(202).json(orderCreated)
    } catch (error) {
        
    }
    
};