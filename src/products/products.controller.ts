import { Controller, Get, Post,Put,Param,Body } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import {ProductTransferObject} from "./dto/product_dto";

@Controller('products')
export class ProductsController {

    constructor(private readonly productService:ProductsService){}

    @Get()
    async listAllProducts(): Promise<Product[]> {
        return await this.productService.findAll()
    }

    @Get(':id')
    async findProductByID(@Param('id') id:String):Promise<Product>{
        return this.productService.findOne(id)
    }

    @Post('new')
    async createProduct(@Body() productData:ProductTransferObject): Promise<Product> {
        return this.productService.create(productData)
    }

    // @Put('update')
    // async updateProduct(@Body() productData:ProductTransferObject,id:String): Promise<Product> {
    //     return this.createProduct(productData)
    // }
    
}
