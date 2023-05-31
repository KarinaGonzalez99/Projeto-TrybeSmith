import { Router } from 'express';
import Middleware from '../middleware/login';
import LoginControllers from '../controller/login';

const Routers = Router();

Routers.post('/login', Middleware, LoginControllers.LoginController);

export default Routers;