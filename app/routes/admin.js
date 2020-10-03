const connection = require('../../config/dbConnection');
const { saveEstudante } = require('../models/estudantesModel');

const postEstudante = (app) => {
  app.post(`/estudante/salvar`, (req, res) => {
    let estudante = req.body;
    saveEstudante(estudante, connection, function (results) {
      res.redirect('/estudantes');
    });
  });
};

module.exports = postEstudante;
