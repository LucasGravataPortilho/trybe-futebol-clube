import { Router } from 'express';
import loginController from '../controllers/UsersController';
import validateUser from '../middlewares/validateUser';

const router = Router();

router.post('/', validateUser, loginController.login);

export default router;
