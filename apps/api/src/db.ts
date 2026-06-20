import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('cleaners', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});