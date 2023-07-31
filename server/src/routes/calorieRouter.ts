import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('calorie');
});

export default router;