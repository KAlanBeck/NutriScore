import { Router } from 'express';
import calorieController from '../controllers/calorieController';

const router = Router();

router.get('/:item', calorieController.getNutrition, (req, res) => {
  return res.status(200).json(res.locals.nutrition);
});

export default router;