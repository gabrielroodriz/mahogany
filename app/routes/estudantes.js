const connection = require('../../config/dbConnection');
const { getNotas, getNotasId } = require('../models/estudantesModel');

module.exports = function (app) {
  app.get(`/estudantes/:id`, (req, res) => {
    getNotasId(req.params.id, connection, (error, result) => {
      res.render('estudantes/estudantes', { notas: result });
    });
  }),
  app.get(`/estudantes`, (req, res) => {
    getNotas(connection, (error, result) => {
      res.render('estudantes/estudantes', { notas: result });
    });
  });
  
}
