import HttpException from '../httpException';
import TeamsModel from '../models/TeamModel';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findById(id: number): Promise<TeamsModel> {
    const team = await TeamsModel.findOne({
      where: { id },
    });

    if (!team) {
      throw new HttpException(404, 'There is no team with such id!');
    }
    return team.toJSON();
  }
}

export default TeamsService;
