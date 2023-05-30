import express from 'express';
import produtos from './router/produtos';
import order from './router/order';

const app = express();

app.use(express.json());
app.use('/', produtos);
app.use('/', order);

export default app;
