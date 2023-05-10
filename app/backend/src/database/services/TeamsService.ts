import TeamsModel from '../models/TeamModel';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }
}

export default TeamsService;