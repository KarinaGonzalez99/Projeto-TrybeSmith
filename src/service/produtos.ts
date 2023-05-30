import Models from '../database/models/product.model';
import { Product } from '../types/Product';

const create = async (product: Product): 
Promise<unknown> => {
  const ServiceProduto = await Models.create(product);

  return ServiceProduto;
};

const ControllerProductGet = async () :
Promise<unknown> => {
  const get = await Models.findAll();
  return get;
};

export default { create, ControllerProductGet };
