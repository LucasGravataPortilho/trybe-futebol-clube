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

  it('testando o metodo findAll (service)', async () => {
    const teams: TeamsModel[] = [new TeamsModel({ id: 1, teamName: 'Botafogo' })];

    sinon.stub(TeamsModel, 'findAll').resolves(teams);

    const result = await TeamsService.findAll();

    expect(result).to.be.deep.eq(teams);
    expect(result.length).to.be.eq(1);
    expect(result).to.be.an('array');
  });

  it('testando o metodo findById (service)', async () => {
    const teams: TeamsModel = new TeamsModel({ id: 1, teamName: 'Botafogo' });

    sinon.stub(TeamsModel, 'findOne').resolves(teams);

    const result = await TeamsService.findById(1);

    expect(result).to.be.deep.eq(teams);
    expect(result).to.be.an('object');
  });

  it('testando o metodo findAll (controller)', async () => {
    const teams: TeamsModel[] = [new TeamsModel({ id: 1, teamName: 'Botafogo' })];

    sinon.stub(TeamsModel, 'findAll').resolves(teams);

    const result = await chai.request(app).get('/teams');

    expect(result.body).to.be.deep.eq(teams);
    expect(result.body).to.be.an('array');
    expect(result).to.be.an('object');
  });

  it('testando o metodo findById (controller)', async () => {
    const teams: TeamsModel = new TeamsModel({ id: 1, teamName: 'Botafogo' });

    sinon.stub(TeamsModel, 'findOne').resolves(teams);

    const result = await chai.request(app).get('/teams/1');

    expect(result.body).to.be.deep.eq(teams);
    expect(result.body).to.be.an('object');
    expect(result).to.be.an('object');
  });
});
