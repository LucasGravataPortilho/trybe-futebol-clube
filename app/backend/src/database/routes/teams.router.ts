import { Router } from 'express';
import teamsController from '../controllers/TeamsController';

const router = Router();

router.get('/', teamsController.findAll);

export default router;
