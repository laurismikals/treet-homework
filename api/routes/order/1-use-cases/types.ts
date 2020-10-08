import { MakeOrderArguments } from '../0-entity/types';
import { Database } from '../2-interface-adapters/database/types';

export type Order = {
  id: string;
  table: number;
  date: string;
  food?: string[];
  createdOn: number;
  modifiedOn: number;
};

export type AddOrder = (orderData: MakeOrderArguments) => Promise<Order>;

export type MakeAddOrder = (arg: { database: Database<Order> }) => AddOrder;
