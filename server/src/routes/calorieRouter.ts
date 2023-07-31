import { Router } from 'express';

const router = Router();

router.get('/food', (req, res) => {
  return res.status(200).json(res.locals.food);
})

export default router;