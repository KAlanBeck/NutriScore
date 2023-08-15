import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';

const sessionController = {
  createSession: async (req: Request, res: Response, next: NextFunction) => {
    const token = res.locals.user._id;

    res.cookie('token', token.toString(), {
      httpOnly: true
    });

    return next();
  },

  verifySession: async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
      console.log('invalid token in sessionController.verifySession');
    }

    try {
      const user = await User.findById(token);

      res.locals.user = user;
      return next();
      
    } catch(error) {
      console.log(`${error} in userController.signup`);
    }
  },

  endSession: async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('token');
    return next();
  },
}

export default sessionController;