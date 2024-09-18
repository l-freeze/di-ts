import fs from 'fs';
import { IProductRepository } from "../domain/repository/IProductRepository";
import {Product} from "../domain/Entity/Product";

const writeTo = './data-store/file_db_product.txt';
export class FileProductRepository implements IProductRepository
{
    async save(product: Product): Promise<boolean>
    {
        fs.appendFile( writeTo , `${product.name.value},${product.description.value}\n` , (err) => {
            if(err){
                console.log(err);
                throw err;
            }
        });

        console.log(`[SAVE:file]name: ${product.name.value}, description: ${product.description.value}`);
        return true;
    }
}