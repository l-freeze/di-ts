import {container} from "../di";
import {SqliteProductRepository} from "./persistence/SqliteProductRepository";
import {FileProductRepository} from "./persistence/FileProductRepository";

container.register('IProductRepository', {useClass: SqliteProductRepository});
//container.register('IProductRepository', {useClass: FileProductRepository});
