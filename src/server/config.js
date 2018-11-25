const path = require('path');
const env = require('../../env/server');
const basePath = path.resolve(__dirname, '..', '..');

module.exports = {
  key: env.key,
  port: env.port,
  path: {
    base: basePath,
    static: path.join(basePath, 'static'),
  },
  database: {
    dialect: env.dbDialect,
    name: env.dbName,
    username: env.dbUsername,
    password: env.dbPassword,
    host: env.dbHost,
  },
  cacheServers: ['localhost:11211'],
  cacheExpireTime: 1000 * 60 * 60 * 24, // 1 day
  tokenExpireTime: 1000 * 60 * 60 * 24 * 7 * 2, // 2 weeks
  saltRounds: 10,
  loginAttemptsThrottle: 5,
  common: require('../common/config'),
};
