import { Application } from 'express';

import { postOrder } from './order/2-interface-adapters/controlles';

export const mountRoutes = (app: Application): void => {
  app.post('/orders', postOrder);
};
