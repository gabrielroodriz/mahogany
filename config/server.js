const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.listen(port, (err) => {
  console.log(`Server running in port ${port}`);
});

module.exports = app;
