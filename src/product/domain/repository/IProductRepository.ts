export interface IProductRepository
{
    save(name: string, description: string): Promise<boolean>;
}