import { injectable, inject } from 'tsyringe';
import { IProductRepository } from '../../../domain/repository/IProductRepository';
import {Input} from "./IO";
import {Product} from "../../../domain/Entity/Product";

@injectable()
export class Interactor {
    constructor(
        @inject('IProductRepository') private readonly productRepository: IProductRepository
    ) {}

    async execute(input: Input): Promise<void> {

        let product = Product.create(input.name, input.description);
        await this.productRepository.save(product);
    }
}