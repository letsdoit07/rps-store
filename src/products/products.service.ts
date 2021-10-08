import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async findAll():Promise<Product[]> {
        return this.productModel.find();
    }

    async findOne(id:String):Promise<Product>{
        return this.productModel.findById(id);
    }

    async create(data:Product): Promise<Product> {
        let newProduct = await this.productModel.create(data)
        return newProduct.save()
    }

    async updateOne(data:Product,id:String): Promise<Product> {
        let newProduct = await this.productModel.findByIdAndUpdate(id,data)
        return newProduct.update()
    }

}
