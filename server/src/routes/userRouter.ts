import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/login', userController.login, (req, res) => {
  return res.status(200).send('login successful');
});

router.post('/signup', userController.signup, (req, res) => {
  return res.status(200).send('signup successful');
});

router.post('/meals', (req, res) => {
  return res.status(200).send('food added to favorites');
});

router.get('/meals', (req, res) => {
  return res.status(200).json(res.locals.favorites);
});

export default router;