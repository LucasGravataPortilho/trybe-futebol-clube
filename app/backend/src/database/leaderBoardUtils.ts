class LeaderBoard {
  private declare name: string;
  private declare totalPoints: number;
  private declare totalGames: number;
  private declare totalVictories: number;
  private declare totalDraws: number;
  private declare totalLosses: number;
  private declare goalsFavor: number;
  private declare goalsOwn: number;
  private declare goalsBalance: number;
  private declare efficiency: number;

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

  public restartBoard = () => {
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  };

  public homeWin = (homeTeamGoals: number, awayTeamGoals: number) => {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 3;
    this.totalVictories += 1;
  };

  public homeLose = (homeTeamGoals: number, awayTeamGoals: number) => {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalLosses += 1;
  };

  public homeTie = (homeTeamGoals: number, awayTeamGoals: number) => {
    this.goalsFavor += homeTeamGoals;
    this.goalsOwn += awayTeamGoals;
    this.totalPoints += 1;
    this.totalDraws += 1;
  };
}

export default LeaderBoard;
