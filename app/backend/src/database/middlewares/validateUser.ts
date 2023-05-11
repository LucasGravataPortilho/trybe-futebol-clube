import { NextFunction, Request, Response } from 'express';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const textEmail = /\S+@\S+\.\S+/;
  const passLimit = 6;

  if (!textEmail.test(email) || password.length < passLimit) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  next();
};

export default validateUser;
