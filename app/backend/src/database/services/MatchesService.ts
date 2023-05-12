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
}

export default MatchesService;
