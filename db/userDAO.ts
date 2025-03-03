import { OkPacket } from 'mysql'
import { execute } from './dbService'
import { User } from '../models/userModel'
import { userQueries } from './userQueries'

export const getUserByUsername = async (username:string) => {
    return execute<User>(userQueries.selectByUsername, [username]);
}

export const createUser = async (user:User) => {
    return execute<OkPacket>(userQueries.createUser, [user.username, user.password, user.email, user.userType]);
}

export const updateUser = async (user:User, userId:number) => {
    return execute<OkPacket>(userQueries.updateUser, [user.username, user.password, user.email, user.userType, userId]);
}

export const deleteUser = async (userId:number) => {
    return execute<OkPacket>(userQueries.deleteUser, [userId]);
}