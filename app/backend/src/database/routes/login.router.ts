import { Router } from 'express';
import UserController from '../controllers/UsersController';
import validateLogin from '../middlewares/validateLogin';
import tokenAuth from '../middlewares/tokenAuth';

const router = Router();

router.post('/', validateLogin, UserController.login)
  .get('/role', tokenAuth, UserController.getUserRole);

export default router;
