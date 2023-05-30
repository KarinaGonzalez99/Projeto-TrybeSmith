import express from 'express';
import OrdersController from '../controller/order';

const Routers = express.Router();

Routers.get('/orders', OrdersController.ControllerOrderGet);

export default Routers;