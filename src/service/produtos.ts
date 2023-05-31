import Models from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (product: Product): Promise<unknown> => Models.create(product);

const ControllerProductGet = async (): Promise<unknown> => Models.findAll();

export default { create, ControllerProductGet };
