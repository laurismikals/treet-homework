import {
  useMutation,
  MutationFunction,
} from 'react-query';

import { post } from '../../helpers/api';

import { MakeOrderArguments } from '../../../../api/routes/order/0-entity/types';
import { Order } from '../../../../api/routes/order/1-use-cases/types';
import { ValidationError } from '../../../../api/validateData/types';

const addOrder: MutationFunction<{ posted: Order }, MakeOrderArguments> = async (parameters) => post(
  '/orders',
  parameters,
);

export const useAddOrder = ({ onSuccess, onError }: {
  onSuccess?: (data: Order) => void,
  onError?: (error: ValidationError) => void,
}) => useMutation<{ posted: Order }, ValidationError, MakeOrderArguments>(addOrder, {
  onSuccess: (data) => {
    onSuccess && onSuccess(data.posted);
  },
  onError: (error) => {
    onError && onError(error);
  },
});
