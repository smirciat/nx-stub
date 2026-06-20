import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../db';

interface UserAttributes {
  id: number;
  title: string;
  completed: boolean;
  date: string;
  time: string;
  initials: string;
  category: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'completed' | 'date' | 'time' | 'initials' | 'category' > {}

export class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare title: string;
  declare completed: boolean;
  declare date: string;
  declare time: string;
  declare initials: string;
  declare category: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date: {type:DataTypes.STRING},
    time: {type:DataTypes.STRING},
    initials: {type:DataTypes.STRING},
    category: {type:DataTypes.STRING},
  },
  {
    sequelize,
    tableName: 'users',
  }
);