import { NextFunction, Request, Response } from 'express';
import HttpException from '../httpException';
import { validateToken } from '../auth';

const tokenAuth = (req:Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new HttpException(401, 'Token not found');
  }

  try {
    const validToken = validateToken(token);
    console.log(validToken);
    res.locals.token = validToken;
    console.log(res.locals.token);
    next();
  } catch (error) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

export default tokenAuth;
