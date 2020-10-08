import * as Yup from 'yup';

import { unique } from '../helpers/unique';

import { Errors, ValidationError } from './types';

const prepareYupErrors = (error: Yup.ValidationError): Errors => {
  const yupError = error as Yup.ValidationError;

  const errorObject: Errors = {};

  unique(yupError.inner.map(({ path }) => path)).forEach((field) => {
    errorObject[field] = yupError.inner
      .filter(({ path }) => path === field)
      .map(({ message }) => message);
  });

  return errorObject;
};

type ValidateData = (
  schema: Yup.ObjectSchema,
  data: Record<string, unknown>,
) => Promise<undefined | Errors>;
export const validateData: ValidateData = async (schema, data) => {
  try {
    await schema.validate(data, { abortEarly: false });
    return;
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return prepareYupErrors(error);
    }
    return error;
  }
};
