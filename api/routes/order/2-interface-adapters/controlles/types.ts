import { Request, Response } from 'express';

import { AddOrder } from '../../1-use-cases/types';

export type PostOrder = (req: Request, res: Response) => void;

export type MakePostOrder = (arg: { addOrder: AddOrder }) => PostOrder;
