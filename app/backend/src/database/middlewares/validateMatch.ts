import { NextFunction, Request, Response } from 'express';
import HttpException from '../httpException';
import TeamsService from '../services/TeamsService';

const validateMatch = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }

    const homeTeam = await TeamsService.findById(homeTeamId);
    const awayTeam = await TeamsService.findById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      throw new HttpException(404, 'There is no team with such id!');
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default validateMatch;
