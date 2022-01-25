
const express = require('express');
const app = express();
const port = 3000;
const base_url = 'http://localhost';

const rutes = require('./router');

app.use('/', rutes.router);

app.listen(port, () => {
  console.log(`App escoltant a ${base_url}:${port}`);
});

