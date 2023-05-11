import { NextFunction, Request, Response } from 'express';
import HttpException from '../httpException';
import validateUser from './validateUser';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new HttpException(400, 'All fields must be filled');
  }

  validateUser({ email, password });

  next();
};

export default validateLogin;
