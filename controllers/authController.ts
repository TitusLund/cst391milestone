import { Request, RequestHandler, Response } from 'express';

export const loginUser: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}  
export const logoutUser: RequestHandler = async (req: Request, res: Response) => {
    res.status(501).json({Message: "Not Yet Implemented"});
}  