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
  }
}

export default LeaderBoard;
