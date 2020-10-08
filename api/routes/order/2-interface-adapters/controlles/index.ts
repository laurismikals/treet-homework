import { addOrder } from '../../1-use-cases';

import { makePostOrder } from './postOrder';

export const postOrder = makePostOrder({ addOrder });
