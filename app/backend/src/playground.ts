import LeaderBoardService from './database/services/LeaderBoardService';

async function main() {
  const teams = await LeaderBoardService.getHomeLeaderBoard();
  teams.forEach((team) => {
    console.log(team);
    if (team.homeTeam) {
      team.homeTeam.forEach((match) => console.log(match));
    }
  });
}

main();
