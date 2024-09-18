export class ProductName {
    private constructor(
        public readonly value: string
    ) {
    }

    static create(name: string): ProductName {
        if (2 < name.length && name.length < 36) {
            throw new Error('Product name must be between 2 and 36 characters');
        }
        return new ProductName(name);
    }
}