import { Uid } from '../../../uid';
import { validateData } from '../../../validateData';
import { ValidationError } from '../../../validateData/types';

export interface MakeOrder {
  (orderData: MakeOrderArguments): Promise<MakeOrderReturnValue>;
}

type BuildMakeOrderArguments = {
  uid: Uid;
  validate: Validate;
  ValidationError: typeof ValidationError;
};

export type BuildMakeOrder = (orderData: BuildMakeOrderArguments) => MakeOrder;

export type MakeOrderArguments = {
  id?: string;
  table: number;
  date: string;
  food?: string[];
  createdOn?: number;
  modifiedOn?: number;
};

export type MakeOrderReturnValue = Readonly<{
  getId: () => string;
  getTable: () => number;
  getDate: () => string;
  getFood: () => string[] | undefined;
  getCreatedOn: () => number;
  getModifiedOn: () => number;
}>;

export type Validate = (
  data: MakeOrderArguments,
) => ReturnType<typeof validateData>;
