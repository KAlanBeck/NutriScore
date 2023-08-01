import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';

const sessionController = {
  createSession: async (req: Request, res: Response, next: NextFunction) => {
    const token = res.locals.user._id;
    console.log(token);

    // res.cookie('token', token, {
    //   httpOnly: true
    // });

    res.cookie('name', 'test', {
      httpOnly: true,
      sameSite: 'none',
      secure: true
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
}

export default sessionController;