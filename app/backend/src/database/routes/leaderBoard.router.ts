import { Router } from 'express';
import leaderBoardController from '../controllers/LeaderBoardController';

const router = Router();

router.get('/home', leaderBoardController.getHomeLeaderBoard);

export default router;
