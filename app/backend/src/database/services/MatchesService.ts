import HttpException from '../httpException';
import MatchesModel from '../models/MatchModel';
import TeamsModel from '../models/TeamModel';

class MatchesService {
  public static async findAll(inProgress: unknown): Promise<MatchesModel[]> {
    const matches = await MatchesModel.findAll({
      include: [
        {
          model: TeamsModel,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: TeamsModel,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });

    if (inProgress === 'true') return matches.filter((m) => m.inProgress === true);
    if (inProgress === 'false') return matches.filter((m) => m.inProgress === false);
    return matches;
  }

  public static async matchFinish(id: number): Promise<void> {
    const match = await MatchesModel.findByPk(id);
    await match?.update({
      inProgress: false,
    }, {
      where: { id },
    });
  }

  public static async updateMatch(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<void> {
    const match = await MatchesModel.findByPk(id);
    if (!match) throw new HttpException(400, 'Match not found');
    match.homeTeamGoals = homeTeamGoals;
    match.awayTeamGoals = awayTeamGoals;
    match.save();
  }

  public static async create(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<MatchesModel> {
    const newMatch = await MatchesModel.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return newMatch;
  }
}

export default MatchesService;
