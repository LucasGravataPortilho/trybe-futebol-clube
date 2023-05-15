import LeaderBoard from '../leaderBoardUtils';
import MatchesModel from '../models/MatchModel';
import TeamsModel from '../models/TeamModel';

class LeaderBoardService extends LeaderBoard {
  public static async getHomeLeaderBoard() {
    const teams = await TeamsModel.findAll({
      include: [{ model: MatchesModel, as: 'homeTeam' }],
    });

    const leaderBoards = teams.map((team) => new LeaderBoard(team.teamName, team.homeTeam));
    return leaderBoards;
  }
}

export default LeaderBoardService;
