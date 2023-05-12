import { NextFunction, Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UserController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await UsersService.login(req.body);

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public static async getUserRole(_req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = res.locals.token;
      const userRole = await UsersService.getUserRole(id);

      res.status(200).json({ role: userRole });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
