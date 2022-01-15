
const express = require('express');
const app = express();
const port = 3000;
const base_url = 'http://localhost';

app.get('/user', (req, res) => {
  const response = {
    nom: 'Toni',
    edat: 51,
    url: `${base_url}:${port}${req.url}`
  }
  res.send(response);
});

app.listen(port, () => {
  console.log(`App listening at ${base_url}:${port}`);
});

