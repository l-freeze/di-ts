export class ProductName {
    private name: string;
    private constructor(value: string) {
        this.name = value;
    }

    create(name: string): ProductName {
        if (2 < name.length && name.length < 36) {
            throw new Error('Product name must be between 2 and 36 characters');
        }
        return new ProductName(name);
    }
}