import { uid } from '../../../../uid';

import { Order } from '../../1-use-cases/types';

import { FindById, Insert, MakeDatabase } from './types';

const COLLECTION = 'orders';

export const makeDatabase: MakeDatabase<Order> = ({ makeDb }) => {
  const insert: Insert<Order> = async ({
    id: _id = uid.makeId(),
    ...orderData
  }) => {
    const db = await makeDb();

    const result = await db
      .collection(COLLECTION)
      .insertOne({ _id, ...orderData });

    const { _id: id, ...insertedData } = result.ops[0];

    return { id, ...insertedData } as Order;
  };

  const findById: FindById<Order> = async ({ id: _id }) => {
    const db = await makeDb();

    const result = await db.collection(COLLECTION).find({ _id });

    const found = await result.toArray();

    if (found.length === 0) {
      return null;
    }

    const { _id: id, ...info } = found[0];

    return { id, ...info } as Order;
  };

  return Object.freeze({
    insert,
    findById,
  });
};
