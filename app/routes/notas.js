const connection = require('../../config/dbConnection');

module.exports = (app) => {
  app.get('/notas', (req, res) => {
    const sql = 'SELECT * FROM estudantes';
    connection.query(sql, function (error, result) {
      res.render('notas/notas', { notas: result });
    });
  });
};
