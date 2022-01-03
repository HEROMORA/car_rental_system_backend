const colors = require('colors');
const { Sequelize } = require('sequelize');

const db = process.env.DB_DATABASE;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASS || '';
const dbPort = parseInt(process.env.DB_PORT, 10) || 3306;

const sequelize = new Sequelize(db, dbUsername, dbPassword, {
  logging: false,
  dialect: 'mysql',
  port: dbPort,
});

module.exports = sequelize;
