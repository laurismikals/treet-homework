import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { mountRoutes } from './routes';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['X-Requested-With,content-type'],
    credentials: true,
  }),
);

mountRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Listening on ${PORT}`));
