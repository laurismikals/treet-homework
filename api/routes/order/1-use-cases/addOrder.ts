import { makeOrder } from '../0-entity';

import { AddOrder, MakeAddOrder } from './types';

export const makeAddOrder: MakeAddOrder = ({ database }) => {
  const addOrder: AddOrder = async (orderData) => {
    const order = await makeOrder(orderData);

    const exists = await database.findById({ id: order.getId() });
    if (exists) {
      return exists;
    }

    return database.insert({
      id: order.getId(),
      table: order.getTable(),
      date: order.getDate(),
      food: order.getFood(),
      createdOn: order.getCreatedOn(),
      modifiedOn: order.getModifiedOn(),
    });
  };

  return addOrder;
};
