import LeaderBoardService from './database/services/LeaderBoardService';

async function main() {
  const leaderBoards = await LeaderBoardService.getHomeLeaderBoard();
  console.log(leaderBoards);
}

main();
