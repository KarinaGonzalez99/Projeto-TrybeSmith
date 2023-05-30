import { Request, Response } from 'express';
import OrdersService from '../service/order';

const ControllerOrderGet = async (_req: Request, res: Response): 
Promise<Response> => {
  const get = await OrdersService.ControllerOrderGet();
  return res.status(200).json(get);
};

export default { ControllerOrderGet };