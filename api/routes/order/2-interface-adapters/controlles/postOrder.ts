import { HTTP_STATUS_CODE } from '../../../../constants/httpsStatusCode';

import { MakePostOrder, PostOrder } from './types';

export const makePostOrder: MakePostOrder = ({ addOrder }) => {
  const postOrder: PostOrder = async (req, res) => {
    try {
      const orderData = req.body;

      const posted = await addOrder(orderData);

      res.send({ posted });
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).send({ error });
    }
  };

  return postOrder;
};
