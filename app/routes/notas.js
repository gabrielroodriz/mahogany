const connection = require('../../config/dbConnection');
const getNotas = require('../models/notasModel');
const getNotaId = require('../models/notasModel');

module.exports = (app) => {
  app.get('/notas', (req, res) => {
    getNotas(connection, (error, result) => {
      res.render('notas/notas', { notas: result });
    });
  });
};

module.exports = (app) => {
  app.get(`/notas/:id`, (req, res) => {
    console.log(req.params.id);
    getNotaId(req.params.id, connection, (error, result) => {
      res.render('notas/notas', { notas: result });
    });
  });
};
