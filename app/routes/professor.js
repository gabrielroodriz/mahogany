const connection = require('../../config/dbConnection');
const { getProfessores, saveProfessor, deleteProfessor } = require('../models/professoresModel');

module.exports = function (app) {
  app.post(`/professor/salvar`, (req, res) => {
    let professor = req.body;
    saveEstudante(professor, connection, function (results) {
      res.redirect('/professores');
    });
  }),
    app.get(`/professores`, (req, res) => {
      getProfessores(connection, (error, result) => {
        res.render('professores/professores', { professores: result });
      });
    }),
    app.delete(`/professores/excluir`, (req, res) => {
      let professor = req.params.id;
      deleteProfessor(professor,connection, (error, result) => {
        res.render('professores/professores', { professores: result });
      });
    });
};
