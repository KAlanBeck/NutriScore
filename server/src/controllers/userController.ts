import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';

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

      return next();
    } catch(error) {
      console.log(`${error} in userController.login`);
    }
  }
};

export default userController;