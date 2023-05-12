import { Router } from 'express';
import matchesController from '../controllers/MatchesController';
import tokenAuth from '../middlewares/tokenAuth';
import validateMatch from '../middlewares/validateMatch';

const router = Router();

router.get('/', matchesController.findAll)
  .patch('/:id/finish', tokenAuth, matchesController.matchFinished)
  .patch('/:id', tokenAuth, matchesController.updateMatch)
  .post('/', tokenAuth, validateMatch, matchesController.createMatch);

export default router;
