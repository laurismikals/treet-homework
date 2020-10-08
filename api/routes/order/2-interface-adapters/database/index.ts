import mongodb from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { makeDatabase } from './makeDatabase';

import { MakeDb } from './types';

const { MongoClient } = mongodb;

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
});

const server = new MongoMemoryServer({
  autoStart: false,
});

export const makeDb: MakeDb = async () => {
  if (!server.runningInstance) {
    await server.start();
  }
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db('treat');
};

export const database = makeDatabase({ makeDb });
