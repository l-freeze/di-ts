import { injectable, inject } from 'tsyringe';
import { IProductRepository } from '../../../domain/repository/IProductRepository';
import {Input} from "./IO";

@injectable()
export class Interactor {
    constructor(
        @inject('IProductRepository') private readonly productRepository: IProductRepository
    ) {}

    async execute(input: Input): Promise<void> {

        await this.productRepository.save(input.name, input.description);
    }
}