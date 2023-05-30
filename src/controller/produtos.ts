import { Request, Response } from 'express';
import ServiceProdutos from '../service/produtos';

const ControllerProduct = async (req: Request, res: Response): 
Promise<void> => {
  const created = await ServiceProdutos.create(req.body);
  res.status(201).json(created);
};

const ControllerProductGet = async (req: Request, res: Response): 
Promise<void> => {
  const get = await ServiceProdutos.ControllerProductGet();
  res.status(200).json(get);
};

export default { ControllerProduct, ControllerProductGet };
