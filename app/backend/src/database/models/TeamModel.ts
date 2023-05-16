import { DataTypes, Model } from 'sequelize';
import db from '.';
import IMatch from '../interface/match';

class TeamsModel extends Model {
  declare id: number;
  declare teamName: string;
  declare homeTeam: IMatch[];
  declare awayTeam: IMatch[];
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
