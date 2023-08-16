import User from '../models/userModel';
import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;

const sessionController = {
  createSession: async (req: Request, res: Response, next: NextFunction) => {
  const id = res.locals.user._id

    try {
      const token = sign({ userId: id }, process.env.SECRET_KEY!); 
      
      res.cookie('token', token); 
      
      return next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  },

  verifySession: async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;

    if (!token) {
      console.log('Invalid token in sessionController.verifySession');
      return next(); 
    }

    try {
      const decoded = verify(token, process.env.SECRET_KEY!) as { userId: string };
      const user = await User.findById(decoded.userId);

      if (!user) {
        console.log('User not found in sessionController.verifySession');
        return next(); 
      }

      res.locals.user = user;
      return next();
    } catch (error) {
      console.log(`${error} in sessionController.verifySession`);
      return next(); 
    }

  },

  endSession: async (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie('token');
    return next();
  },
}

export default sessionController;