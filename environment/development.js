const path = require('path');

module.exports = {
  dbUrl: process.env.MONGO_URL,
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
  portHttp: 3000,
  portHttps: 3001
}