import {Request, Response, Router} from 'express';
import { Order } from '../services/order.service';

export const Pedido = async (req:Request,res:Response)=>{
    let CliendID:number = parseInt(req.body.client as string)
    try {
        const orders = await Order.findOrdersByUser(CliendID)
        res.json(orders)
    } catch (error) {
        res.status(404).json({"message":error})
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