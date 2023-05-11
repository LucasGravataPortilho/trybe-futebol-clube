import { Router } from 'express';
import UserController from '../controllers/UsersController';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/', validateLogin, UserController.login);

export default router;
