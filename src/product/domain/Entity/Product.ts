import {ProductName} from "../value/ProductName";
import {ProductDescription} from "../value/ProductDescription";

export class Product
{
    private constructor(
        public readonly name: ProductName,
        public readonly description: ProductDescription
    ) {}

    static create(name: string, description: string): Product {
        return new Product(
            ProductName.create(name),
            ProductDescription.create(description)
        );
    }
}