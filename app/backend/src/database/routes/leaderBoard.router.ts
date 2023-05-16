import { Router } from 'express';
import leaderBoardController from '../controllers/LeaderBoardController';

const router = Router();

router.get('/home', leaderBoardController.getHomeLeaderBoard)
  .get('/away', leaderBoardController.getAwayLeaderBoard);

export default router;
