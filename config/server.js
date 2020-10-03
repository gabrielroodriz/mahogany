const express = require('express');

const consign = require('consign');

const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({ extended: true }));

consign().include('./app/routes').then('./config/dbConnection.js').into(app);

app.listen(port, (err) => {
  console.log(`Server running in port ${port}`);
});

module.exports = app;
