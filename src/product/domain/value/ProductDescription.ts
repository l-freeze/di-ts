export class ProductDescription {
    private name: string;
    private constructor(value: string) {
        this.name = value;
    }

    create(name: string): ProductDescription {
        if (40 < name.length && name.length < 255) {
            throw new Error('Product name must be between 40 and 255 characters');
        }
        return new ProductDescription(name);
    }
}