import express from 'express';

import calorieRouter from './routes/calorieRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use('/api', calorieRouter);
app.use('/user', userRouter);


app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(5000);