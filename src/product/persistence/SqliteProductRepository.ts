import { product as table } from '../../../database/schema';
import { db } from '../../../database/db';
import { IProductRepository } from "../domain/repository/IProductRepository";
import {Product} from "../domain/Entity/Product";

type NewProduct = typeof table.$inferInsert;
export class SqliteProductRepository implements IProductRepository
{
    async save(product: Product): Promise<boolean>
    {

        const data: NewProduct = {
            'name': product.name.value,
            'description': product.description.value
        };
        await db.insert(table).values(data);
        console.log(`[SAVE:sqlite]: ${product.name.value}, description: ${product.description.value}`);
        return true;
    }
}