const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./config');

const sequelize = new Sequelize(config[env]);

modules.exports = sequelize
