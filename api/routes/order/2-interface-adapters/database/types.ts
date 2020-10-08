import { Db } from 'mongodb';

import { MakeOrderArguments } from '../../0-entity/types';

export type Insert<T> = (arg: MakeOrderArguments) => Promise<T>;
export type FindById<T> = (arg: { id: string }) => Promise<T | null>;

export type Database<T> = Readonly<{
  insert: Insert<T>;
  findById: FindById<T>;
}>;

export type MakeDatabase<T> = (arg: { makeDb: MakeDb }) => Database<T>;

export type MakeDb = () => Promise<Db>;
