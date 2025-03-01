import { OkPacket } from 'mysql'
import { execute } from './dbService'
import { Product } from '../models/productModel'
import { productQueries } from './productQueries'

export const getAllProducts = async () => {
    return execute<Product[]>(productQueries.selectAll, []);
};
export const getProductById = async (productId:number) => {
    return execute<Product>(productQueries.selectById, [productId]);
};
export const getProductWithSearch = async(stud_length:string, stud_width:string, color:string, type:string) => {
    return execute<Product[]>(productQueries.selectAllWithFilters, [stud_length, stud_width, color, type])
}
export const createProduct = async (product:Product) => {
    return execute<OkPacket>(productQueries.createProduct, [product.studLength, product.studWidth, product.color, product.type, product.quantity, product.price]);
}
export const updateProduct = async (product:Product, productId:number) => {
    return execute<OkPacket>(productQueries.updateProduct, [product.studLength, product.studWidth, product.color, product.type, product.quantity, product.price, productId]);
}
export const deleteProduct = async(productId:number) => {
    return execute<OkPacket>(productQueries.deleteProduct, [productId]);
}