import { Router } from 'express';
import teamsController from '../controllers/TeamsController';

const router = Router();

router.get('/', teamsController.findAll)
  .get('/:id', teamsController.findById);

export default router;
