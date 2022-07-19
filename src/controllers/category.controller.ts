import {Request, Response} from 'express';
import { Categories } from '../services/categories.services';

export const categories = async (req:Request,res:Response)=>{
    let categories = await Categories.findCategories()
    res.json(categories)
};

export const allCategories = async (req:Request,res:Response)=>{
    let categories = await Categories.findAll()
    res.json(categories)
};