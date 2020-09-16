const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'xin',
  password: 'xin',
  database: 'dsw',
});

module.exports = connection;
