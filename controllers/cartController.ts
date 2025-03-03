import { Request, RequestHandler, Response } from 'express';

export const getCart: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}  
export const addToCart: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}
export const removeFromCart: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}  
export const checkout: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}  