import {Product} from "../Entity/Product";

export interface IProductRepository
{
    save(product: Product): Promise<boolean>;
}