import { Request, RequestHandler, Response } from 'express';
import * as ProductDAO from '../db/productDAO';
import { OkPacket } from 'mysql';

export const allProducts: RequestHandler = async (req: Request, res: Response) => {
    try{
        const products = await ProductDAO.getAllProducts();
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: "Failed to get all products"});
    }
}  

export const getProductById: RequestHandler = async (req: Request, res: Response) => {
    try{
        const product = await ProductDAO.getProductById(parseInt(req.params.productId));
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: "Failed to get specific product"});
    }
}

export const getProductsWithFilters: RequestHandler = async (req: Request, res: Response) => {
    try{
        var stud_length;
        var stud_width;
        var color;
        var type;
        if(req.body.stud_length == ""){
            stud_length = "%";
        }else{
            stud_length = req.body.stud_length;
        }
        if(req.body.stud_width == ""){
            stud_width = "%";
        }else{
            stud_width = req.body.stud_width;
        }
        if(req.body.color == ""){
            color = "%";
        }else{
            color = req.body.color;
        }
        if(req.body.type == ""){
            type = "%";
        }else{
            type = req.body.type;
        }
        const products = await ProductDAO.getProductWithSearch(stud_length, stud_width, color, type);
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: "Failed to search for filters"});
    }
}

export const createProduct: RequestHandler = async(req: Request, res: Response) => {
    try{
        const OkPacket:OkPacket = await ProductDAO.createProduct(req.body);
        res.status(200).json(OkPacket);
    }catch(error){
        res.status(500).json({message:"Failed to add product"});
    }
}

export const updateProduct: RequestHandler = async(req: Request, res:Response) => {
    try{
        const OkPacket:OkPacket = await ProductDAO.updateProduct(req.body, parseInt(req.params.productId));
        res.status(200).json(OkPacket);
    }catch(error){
        res.status(500).json({message:"Failed to modify product"});
    }
}

export const deleteProduct: RequestHandler = async (req: Request, res: Response) => {
    try{
        const OkPacket:OkPacket = await ProductDAO.deleteProduct(parseInt(req.params.productId));
        res.status(200).json(OkPacket);
    }catch(error){
        res.status(500).json({message:"Failed to delete product"});
    }
}