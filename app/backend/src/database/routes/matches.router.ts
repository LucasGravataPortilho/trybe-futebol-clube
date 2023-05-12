import { Router } from 'express';
import matchesController from '../controllers/MatchesController';
import tokenAuth from '../middlewares/tokenAuth';

const router = Router();

router.get('/', matchesController.findAll)
  .patch('/:id/finish', tokenAuth, matchesController.matchFinished)
  .patch('/:id', tokenAuth, matchesController.updateMatch);

export default router;
