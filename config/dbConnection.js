const mysql = require('mysql');

const connection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'gabriel',
    password: '32266446a',
    database: 'dws',
  });
};

module.exports = connection;
