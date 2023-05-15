import LeaderBoard from '../leaderBoardUtils';
import MatchesModel from '../models/MatchModel';
import TeamsModel from '../models/TeamModel';

class LeaderBoardService extends LeaderBoard {
  public static async getHomeLeaderBoard() {
    const teams = await TeamsModel.findAll({
      include: [{ model: MatchesModel, as: 'homeTeam' }],
    });

    const leaderBoards = teams.map((team) => new LeaderBoard(team.teamName, team.homeTeam));
    return leaderBoards
      .sort((a: LeaderBoard, b: LeaderBoard) => b.goalsFavor - a.goalsFavor)
      .sort((a: LeaderBoard, b: LeaderBoard) => b.goalsBalance - a.goalsBalance)
      .sort((a: LeaderBoard, b: LeaderBoard) => b.totalVictories - a.totalVictories)
      .sort((a: LeaderBoard, b: LeaderBoard) => b.totalPoints - a.totalPoints);
  }
}

export default LeaderBoardService;
