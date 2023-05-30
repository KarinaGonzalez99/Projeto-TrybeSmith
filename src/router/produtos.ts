import { Router } from 'express';
import ProductController from '../controller/produtos';

const Routers = Router();

Routers.post('/products', ProductController.ControllerProduct);
Routers.get('/products', ProductController.ControllerProductGet);

export default Routers;