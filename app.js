const app = require('./config/server');

app.get('/', (require, response) => {
  response.render('home/home');
});

app.get('/notas', (require, response) => {
  response.render('notas/notas');
});

app.get('/admin', (require, response) => {
  response.render('admin/admin');
});
