import { BuildMakeOrder, MakeOrder } from './types';

export const buildMakeOrder: BuildMakeOrder = ({
  uid,
  validate,
  ValidationError,
}) => {
  const makeOrder: MakeOrder = async ({
    id = uid.makeId(),
    table,
    date,
    food,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
  }) => {
    const validationError = await validate({
      id,
      table,
      date,
      food,
      createdOn,
      modifiedOn,
    });

    if (validationError) {
      throw new ValidationError('Validation error', validationError);
    }

    return Object.freeze({
      getId: () => id,
      getTable: () => table,
      getDate: () => date,
      getFood: () => food,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
    });
  };

  return makeOrder;
};
