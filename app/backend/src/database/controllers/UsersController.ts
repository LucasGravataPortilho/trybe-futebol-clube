import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UserController {
  public static async login(req: Request, res: Response) {
    const getToken = await UsersService.login(req.body);

    res.status(200).json({ getToken });
  }
}

export default UserController;
