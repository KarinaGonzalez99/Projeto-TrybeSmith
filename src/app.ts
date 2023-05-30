import express from 'express';
import produtos from './router/produtos';

const app = express();

app.use(express.json());
app.use('/', produtos);

export default app;
