const fs = require('fs');
require('dotenv').config();
const {DEV_USERNAME, DEV_PASSWORD, DEV_DATABASE, DEV_URL, DEV_DIALECT}= process.env
module.exports = {
  development: {
    username: DEV_USERNAME,
    password: DEV_PASSWORD,
    database: DEV_DATABASE,
    url: DEV_URL,
    dialect: DEV_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'dbSequelize',
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'dbSequelize1',
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
