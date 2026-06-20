import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('cleaners', 'postgres', process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});