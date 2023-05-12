import { Request, Response } from 'express';
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

  public static async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.updateMatch(+id, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'Updated match!' });
  }
}

export default MatchesController;
