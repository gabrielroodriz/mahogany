const connection = require('./config/dbConnection');
const app = require('./config/server');

app.get('/', (req, res) => {
  res.render('home/home');
});

app.get('/notas', (req, res) => {
  const sql = 'SELECT * FROM estudantes';
  connection.query(sql, function (error, result) {
    // if (error) console.log(error);
    console.log(result);
    res.send(result);
    res.render('notas/notas', { notas: result });
  });
});

app.get('/professores', (req, res) => {
  const sql = 'SELECT * FROM professores';
  connection.query(sql, function (error, result) {
    // if (error) console.log(error);
    console.log(result);
    res.send(result);
    res.render('professores/professores', { notas: result });
  });
});

app.get('/admin', (req, res) => {
  res.render('admin/admin');
});
