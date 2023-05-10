import { DataTypes, Model } from 'sequelize';
import db from '.';
import TeamsModel from './TeamModel';

class MatchesModel extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchesModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

MatchesModel.belongsTo(TeamsModel, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

TeamsModel.hasMany(MatchesModel, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

TeamsModel.hasMany(MatchesModel, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

export default MatchesModel;
