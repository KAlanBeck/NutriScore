import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import calorieRouter from './routes/calorieRouter';
import userRouter from './routes/userRouter';

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/nutrition', calorieRouter);
app.use('/user', userRouter);

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world');
});

// Catch all
app.use('*', (_req: Request, res: Response) => {
  console.log("We've entered the catch all");
  res.status(404).send('Invalid Endpoint');
});

app.listen(5000, () => {
  console.log('Listening on Port:5000');
});