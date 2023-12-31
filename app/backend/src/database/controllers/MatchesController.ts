import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const result = await MatchesService.findAll(inProgress);
    res.status(200).json(result);
  }

  public static async matchFinished(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.matchFinish(+id);
    res.status(200).json({ message: 'Finished' });
  }

  public static async updateMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      await MatchesService.updateMatch(+id, homeTeamGoals, awayTeamGoals);
      res.status(200).json({ message: 'Updated match!' });
    } catch (error) {
      next(error);
    }
  }

  public static async createMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
      const newMatch = await MatchesService
        .create(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);

      res.status(201).json(newMatch);
    } catch (error) {
      next(error);
    }
  }
}

export default MatchesController;
