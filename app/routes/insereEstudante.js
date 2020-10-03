module.exports = (app) => {
    app.get('/insereestudantes', (req, res) => {
      res.render('admin/insereEstudante');
    });
  };
  