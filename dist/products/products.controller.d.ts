import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { ProductTransferObject } from "./dto/product_dto";
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    listAllProducts(): Promise<Product[]>;
    findProductByID(id: String): Promise<Product>;
    createProduct(productData: ProductTransferObject): Promise<Product>;
}
