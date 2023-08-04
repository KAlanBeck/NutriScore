import { Router } from 'express';
import calorieController from '../controllers/calorieController';
import userController from '../controllers/userController';
import sessionController from '../controllers/sessionController';

const router = Router();

router.post('/food', sessionController.verifySession, calorieController.getNutrition, userController.addMeal, (req, res) => {
  return res.status(200).json(res.locals.meals);
});

export default router;