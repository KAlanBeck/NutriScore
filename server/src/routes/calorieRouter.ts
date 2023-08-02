import { Router } from 'express';
import calorieController from '../controllers/calorieController';
import userController from '../controllers/userController';
import sessionController from '../controllers/sessionController';

const router = Router();

router.post('/api', sessionController.verifySession, calorieController.getNutrition, userController.addMeal, userController.getMeals, (req, res) => {
  return res.status(200).json(res.locals.meals);
});

export default router;