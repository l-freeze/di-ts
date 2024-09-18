import fs from 'fs';
import { IProductRepository } from "../domain/repository/IProductRepository";

const writeTo = './data-store/file_db_product.txt';
export class FileProductRepository implements IProductRepository
{
    async save(name: string, description: string): Promise<boolean>
    {
        fs.appendFile( writeTo , `${name},${description}\n` , (err) => {
            if(err){
                console.log(err);
                throw err;
            }
        });

        console.log(`[SAVE:file]name: ${name}, description: ${description}`);
        return true;
    }
}