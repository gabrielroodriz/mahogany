const express = require('express');
const { response } = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.listen(port, (err) => {
  console.log(`Server running in port ${port}`);
});

module.exports = app;
