import TeamsModel from '../models/TeamModel';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findById(id: number): Promise<TeamsModel> {
    const team = await TeamsModel.findOne({
      where: { id },
    })

    if(!team) {
      throw new Error('Time não encontrado');
    }
    
    return team.toJSON();
  }
}

export default TeamsService;