import { DataTypes, Model } from 'sequelize';
import db from '.';
// eslint-disable-next-line import/no-cycle
import MatchesModel from './MatchModel';

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
  declare homeTeam?: MatchesModel[];
}

TeamsModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default TeamsModel;
