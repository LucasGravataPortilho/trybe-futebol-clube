import LeaderBoard from '../leaderBoardUtils';
import MatchesModel from '../models/MatchModel';
import TeamsModel from '../models/TeamModel';

class LeaderBoardService extends LeaderBoard {
  public static async getHomeLeaderBoard() {
    const teams = await TeamsModel.findAll({
      include: [{ model: MatchesModel, as: 'homeTeam' }],
    });

    const leaderBoard = new LeaderBoard();
    return teams;
  }
}

export default LeaderBoardService;
