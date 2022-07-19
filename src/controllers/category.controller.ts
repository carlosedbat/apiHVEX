import {Request, Response} from 'express';
import { Categories } from '../services/categories.services';

export const categories = async (req:Request,res:Response)=>{
    try {
        let categories = await Categories.findCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json(error)
    }
    
};

export const allCategories = async (req:Request,res:Response)=>{
    try {
        let categories = await Categories.findAll()
        res.json(categories)
    } catch (error) {
        res.status(404).json(error)
    }
    
};