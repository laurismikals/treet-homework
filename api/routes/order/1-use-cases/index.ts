import { database } from '../2-interface-adapters/database';

import { makeAddOrder } from './addOrder';

const addOrder = makeAddOrder({ database });

export { addOrder };
