import express from 'express';
import produtos from './router/produtos';
import order from './router/order';
import login from './router/login';

const app = express();

app.use(express.json());
app.use('/', produtos);
app.use('/', order);
app.use('/', login);

export default app;
