import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;

const sessionController = {
  createSession: async (req: Request, res: Response, next: NextFunction) => {
  const id = res.locals.user._id

    try {
      const token = sign({ userId: id }, process.env.SECRET_KEY!); // Create token
      
      res.cookie('token', token); // Set the token in a cookie
      
      return next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  verifySession: async (req: Request, res: Response, next: NextFunction) => {
    // const { token } = req.cookies;

    // if (!token) {
    //   console.log('invalid token in sessionController.verifySession');
    // }

    // try {
    //   const user = await User.findById(token);

    //   res.locals.user = user;
    //   return next();
      
    // } catch(error) {
    //   console.log(`${error} in sessionController.verifySession`);
    // }
    const { token } = req.cookies;

    if (!token) {
      console.log('Invalid token in sessionController.verifySession');
      return next(); // Proceed to next middleware, but user data will be missing
    }

    try {
      const decoded = verify(token, process.env.SECRET_KEY!) as { userId: string };
      const user = await User.findById(decoded.userId);

      if (!user) {
        console.log('User not found in sessionController.verifySession');
        return next(); // Proceed to next middleware, but user data will be missing
      }

      res.locals.user = user;
      return next();
    } catch (error) {
      console.log(`${error} in sessionController.verifySession`);
      return next(); // Proceed to next middleware, but user data will be missing
    }

  },

  endSession: async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('token');
    return next();
  },
}

export default sessionController;