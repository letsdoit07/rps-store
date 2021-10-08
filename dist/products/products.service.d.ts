import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: String): Promise<Product>;
    create(data: Product): Promise<Product>;
    updateOne(data: Product, id: String): Promise<Product>;
}
