import * as express from 'express';
import TeamsRouter from './database/routes/teams.router';
import LoginRouter from './database/routes/login.router';
import MatchesRouter from './database/routes/matches.router';
import LeaderBoardRouter from './database/routes/leaderBoard.router';
import ErrorMiddleware from './database/middlewares/errorMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    this.app.use('/teams', TeamsRouter);
    this.app.use('/login', LoginRouter);
    this.app.use('/matches', MatchesRouter);
    this.app.use('/leaderboard', LeaderBoardRouter);

    this.app.use(ErrorMiddleware.handleError);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
