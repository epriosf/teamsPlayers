import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("teamsDB", "root", "root", {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: console.log
});