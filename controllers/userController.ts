import { Request, RequestHandler, Response } from 'express';
import * as UserDAO from '../db/userDAO'
import { OkPacket } from 'mysql';


export const getUserByUsername: RequestHandler = async (req:Request, res:Response) => {
    try{
        const user = await UserDAO.getUserByUsername(req.params.username);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: "Failed to find user by username"});
    }
}
export const createUser: RequestHandler = async (req:Request, res:Response) => {
    try{
        const okPacket:OkPacket = await UserDAO.createUser(req.body);
        res.status(200).json(okPacket);
    }catch(error){
        res.status(500).json({message: "Failed to create user"});
    }
}
export const modifyUser: RequestHandler = async (req:Request, res:Response) => {
    try{
        const okPacket:OkPacket = await UserDAO.updateUser(req.body, parseInt(req.params.userId));
        res.status(200).json(okPacket);
    }catch(error){
        res.status(500).json({message: "Failed to modify user"});
    }
}
export const deleteUser: RequestHandler = async (req:Request, res:Response) => {
    try{
        const okPacket:OkPacket = await UserDAO.deleteUser(parseInt(req.params.userId));
        res.status(200).json(okPacket);
    }catch(error){
        res.status(500).json({message: "Failed to delete user"});
    }
}