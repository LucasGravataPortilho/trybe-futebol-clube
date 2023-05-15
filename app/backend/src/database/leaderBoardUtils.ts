import Match from './interface/match';

class LeaderBoard {
  private name: string;
  public totalPoints: number;
  private totalGames: number;
  public totalVictories: number;
  private totalDraws: number;
  private totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  private efficiency: number;

  constructor(name: string, matches?: Match[]) {
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
    this.homeTeamStats(matches);
  }

  private homeWin(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 3;
    this.totalVictories += 1;
    this.totalGames += 1;
  }

  private homeLose(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalLosses += 1;
    this.totalGames += 1;
  }

  private homeTie(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 1;
    this.totalDraws += 1;
    this.totalGames += 1;
  }

  private homeTeamPoints(matches: Match[]): void {
    matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals > awayTeamGoals) this.homeWin(homeTeamGoals, awayTeamGoals);
      if (homeTeamGoals < awayTeamGoals) this.homeLose(homeTeamGoals, awayTeamGoals);
      if (homeTeamGoals === awayTeamGoals) this.homeTie(homeTeamGoals, awayTeamGoals);
    });
  }

  private homeTeamStats(matches?: Match[]): void {
    if (matches) {
      this.homeTeamPoints(matches);
      this.goalsBalance = this.goalsFavor - this.goalsOwn;
      this.efficiency = +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
    }
  }
}

export default LeaderBoard;
