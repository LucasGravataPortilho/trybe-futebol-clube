import Match from './interface/match';

class LeaderBoardAway {
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
    this.awayTeamStats(matches);
  }

  private awayWin(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += awayTeamGoals;
    this.goalsOwn += homeTeamGoals;
    this.totalPoints += 3;
    this.totalVictories += 1;
    this.totalGames += 1;
  }

  private awayLose(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += awayTeamGoals;
    this.goalsOwn += homeTeamGoals;
    this.totalLosses += 1;
    this.totalGames += 1;
  }

  private awayTie(homeTeamGoals: number, awayTeamGoals: number): void {
    this.goalsFavor += awayTeamGoals;
    this.goalsOwn += homeTeamGoals;
    this.totalPoints += 1;
    this.totalDraws += 1;
    this.totalGames += 1;
  }

  private awayTeamPoints(matches: Match[]): void {
    matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (awayTeamGoals > homeTeamGoals) this.awayWin(homeTeamGoals, awayTeamGoals);
      if (awayTeamGoals < homeTeamGoals) this.awayLose(homeTeamGoals, awayTeamGoals);
      if (homeTeamGoals === awayTeamGoals) this.awayTie(homeTeamGoals, awayTeamGoals);
    });
  }

  private awayTeamStats(matches?: Match[]): void {
    const getMatches = matches?.filter((match) => match.inProgress === false);
    if (getMatches) {
      this.awayTeamPoints(getMatches);
      this.goalsBalance = this.goalsFavor - this.goalsOwn;
      this.efficiency = +((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
    }
  }
}

export default LeaderBoardAway;
