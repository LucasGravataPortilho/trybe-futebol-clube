import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const result = await TeamsService.findAll();
    res.status(200).json(result);
  }

  public static async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await TeamsService.findById(+id);

      if (!result) {
        return res.status(404).json({ message: 'Time não encontrado' });
      }

      res.status(200).json(result);
    } catch (err: any) {
      return res.status(500).json({ message: 'time não encontrado' });
    }
  }
}

export default TeamsController;
