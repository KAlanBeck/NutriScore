import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';

interface MealData {
  meal: keyof Meals;
  food: string;
}

interface Meals {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
}

const userController = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log('no username or password in signup');
    }

    try {
      const user = await User.create({
        username: username,
        password: password
      });

      res.locals.user = user;
      return next();
    } catch(error) {
      console.log(`${error} in userController.signup`);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log('no username or password in login');
    }

    try {
      const user = await User.findOne({
        username: username,
        password: password
      });

      res.locals.user = user;
      return next();
    } catch(error) {
      console.log(`${error} in userController.login`);
    }
  },

  addMeal: async (req: Request, res: Response, next: NextFunction) => {
    const { meal, food } = req.body as MealData;
    const { user } = res.locals;

    try {
      if (!user || !user.meals) {
        console.log('User not found');
        return res.status(404).json({ error: 'User not found' });
      }

      user.meals[meal].push(food);

      await user.save();

      return next();
    } catch(error) {
      console.log(`${error} in userController.addMeal`);
    }
  },

  getMeals: async (req: Request, res: Response, next: NextFunction) => {
    const { user } = res.locals
    
    res.locals.meals = user.meals;
    return next();
  },

};

export default userController;