import express from 'express';
import cors from 'cors';
import { productRoute } from './app/modules/product/product.route';
import { globalErrorHandler, notFoundHandler } from './app/middlewares/error';
import { orderRoute } from './app/modules/order/order.route';

const app = express();

app.use([cors(), express.json()]);

app.get('/', (_req, res) => {
  res.send(`<h2>The Server is running successfully!!!</h2>`);
});

app.get('/health', (_req, res) => {
  res.send({
    message: 'Alright',
  });
});

app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

app.use([notFoundHandler, globalErrorHandler]);

export default app;
