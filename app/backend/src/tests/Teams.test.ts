import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import TeamsModel from '../database/models/TeamModel';
import TeamsService from '../database/services/TeamsService';

chai.use(chaiHttp);

const { expect } = chai;

describe('testes da seção Teams', () => {
  afterEach(()=>{
    sinon.restore();
  })

  // it('testando o metodo findAll', async () => {
  //   const teams: TeamsModel[] = [new TeamsModel({ id: 1, teamName: 'Botafogo' })]

  //   sinon.stub(TeamsModel, 'findAll').resolves(teams);

  //   const teamsService = new TeamsService();

  //   const result = await teamsService.findAll();

  //   expect(result).to.be.deep.eq(teams);
  //   expect(result.length).to.be.eq(1);
  //   expect(result).to.be.an('array');
  // });
});
