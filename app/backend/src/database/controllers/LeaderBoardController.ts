import { NextFunction, Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

class LeaderBoardController {
  public static async getHomeLeaderBoard(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LeaderBoardService.getHomeLeaderBoard();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public static async getAwayLeaderBoard(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await LeaderBoardService.getAwayLeaderBoard();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default LeaderBoardController;
