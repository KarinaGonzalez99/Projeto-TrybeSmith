import ModelsOrders from '../database/models/order.model';
import ModelsProduto from '../database/models/product.model';
import { Order } from '../types/Order';

const ControllerOrderGet = async (): Promise<Order[]> => {
  const get = await ModelsOrders.findAll({
    include: { model: ModelsProduto, as: 'productIds', attributes: ['id'] },
  });

  const getAll = get.map(({ dataValues: { id, userId, productIds } }) => 
    ({ id, userId, productIds: productIds?.map(({ id: prodId }) => prodId) })) as Order[];

  return getAll;
};

export default { ControllerOrderGet };