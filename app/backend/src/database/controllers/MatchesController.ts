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
}

export default MatchesController;
