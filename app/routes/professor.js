const connection = require('../../config/dbConnection');

module.exports = (app) => {
  app.get('/professores', (req, res) => {
    const sql = 'SELECT * FROM professores';
    connection().query(sql, function (error, result) {
      res.render('professores/professores', { professores: result });
    });
  });
};
