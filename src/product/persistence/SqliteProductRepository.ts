//import { drizzle } from 'drizzle-orm/better-sqlite3';
import { product } from '../../../database/schema';
import { db } from '../../../database/db';
import { IProductRepository } from "../domain/repository/IProductRepository";

type NewProduct = typeof product.$inferInsert;
export class SqliteProductRepository implements IProductRepository
{
    async save(name: string, description: string): Promise<boolean>
    {

        const data: NewProduct = {name, description};
        await db.insert(product).values(data);
        console.log(`[SAVE:sqlite]: ${name}, description: ${description}`);
        return true;
    }
}