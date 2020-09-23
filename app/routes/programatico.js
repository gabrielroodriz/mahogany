const connection = require('../../config/dbConnection');

module.exports = (app) => {
  app.get('/programatico', (req, res) => {
    const sql = 'SELECT * FROM programatico';
    connection.query(sql, function (error, result) {
      res.render('programatico/programatico', { programatico: result });
    });
  });
};
