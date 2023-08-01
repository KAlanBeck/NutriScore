import { Router } from 'express';
import userController from '../controllers/userController';
import sessionController from '../controllers/sessionController';

const router = Router();

router.post('/login', userController.login, sessionController.createSession, (req, res) => {
  console.log("Token Cookie:", req.cookies.token);
  return res.status(200).json(res.locals.userID);
});

router.post('/signup', userController.signup, sessionController.createSession, (req, res) => {
  console.log("Token Cookie:", req.cookies.token);
  return res.status(200).json(res.locals.userID);
});

router.post('/meals', sessionController.verifySession, userController.addMeal, (req, res) => {
  return res.status(200).send('food added to favorites');
});

router.get('/meals', sessionController.verifySession, userController.getMeals, (req, res) => {
  return res.status(200).json(res.locals.meals);
});

export default router;