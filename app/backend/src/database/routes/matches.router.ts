import { Router } from 'express';
import matchesController from '../controllers/MatchesController';

const router = Router();

router.get('/', matchesController.findAll);

export default router;
