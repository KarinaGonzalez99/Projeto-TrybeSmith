import { Router } from 'express';
import ProductController from '../controller/produtos';

const Routers = Router();

Routers.post('/products', ProductController.ControllerProduct);

export default Routers;