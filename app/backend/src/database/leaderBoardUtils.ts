import ILeaderBoard from './interface/leaderBoard';
import Match from './interface/match';

class LeaderBoard {
  private name: string;
  private totalPoints: number;
  private totalGames: number;
  private totalVictories: number;
  private totalDraws: number;
  private totalLosses: number;
  private goalsFavor: number;
  private goalsOwn: number;
  private goalsBalance: number;
  private efficiency: number;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  private homeWin(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 3;
    this.totalVictories += 1;
  }

  private homeLose(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalLosses += 1;
  }

  private homeTie(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 1;
    this.totalDraws += 1;
  }

  private homeTeamPoints(matches: Match[]): void {
    matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals > awayTeamGoals) this.homeWin(homeTeamGoals, awayTeamGoals);
      if (homeTeamGoals < awayTeamGoals) this.homeLose(homeTeamGoals, awayTeamGoals);
      if (homeTeamGoals === awayTeamGoals) this.homeTie(homeTeamGoals, awayTeamGoals);
    });
  }

  public homeTeamStats(matches: Match[]): ILeaderBoard {
    this.homeTeamPoints(matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.totalGames += 1;
    this.efficiency = +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);

    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: this.efficiency,
    };
  }
}

export default LeaderBoard;
