import {Request, Response, Router} from 'express';
import { Products } from '../services/product.services';

export const getProducts = async (req:Request,res:Response)=>{
    let products = await Products.findAll()
    res.json(products)
};

export const productByCategory = async (req:Request,res:Response)=>{    
    let categoryParam:number = parseInt((req.params.category as string).replace(/[^0-9]/g,''))
    let filterParam = req.params.filter as string
    
    try {
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
            return
        }
    } catch (error) {
        res.send(400).json({
            error:"Bad request."
        })
        return
    }
      
};

export const produtoById = async (req:Request,res:Response)=>{
    let product_id_param:number = parseInt(req.params.id as string)
    let product_selected = await Products.findById(product_id_param)
    res.json(product_selected)
};