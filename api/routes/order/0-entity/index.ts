import * as Yup from 'yup';

import { uid } from '../../../uid';
import { validateData } from '../../../validateData';
import { ValidationError } from '../../../validateData/types';

import { buildMakeOrder } from './makeOrder';
import { Validate } from './types';

const schema = Yup.object().shape({
  id: Yup.string().length(25).required(),
  table: Yup.number().required(),
  date: Yup.string().min(1).max(255).required(),
  createdOn: Yup.number().required(),
  modifiedOn: Yup.number().required(),
});

const validate: Validate = (data) => validateData(schema, data);

export const makeOrder = buildMakeOrder({ uid, validate, ValidationError });
