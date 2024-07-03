/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import notFound from './app/middlewares/notFound';

import globalErrorMainHandler from './app/middlewares/globalErrorMainHandler';

import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(
  cors({ origin: 'https://taskshubrezoanul.netlify.app', credentials: true }),
);
//app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

//routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'sever is running' });
});
// Global error handler
app.use(globalErrorMainHandler);
//Not Found handler
app.use(notFound);

export default app;
