export class ProductDescription {
    private constructor(
        public readonly value: string
    ) {
    }

    static create(input: string): ProductDescription {
        if (input.length <= 20 && 255 < input.length) {
            throw new Error('Product name must be between 20 and 255 characters');
        }
        return new ProductDescription(input);
    }
}