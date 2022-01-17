
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

app.post('/upload', (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
   }
  
   let uploadFile = req.files.file;
  
   uploadFile.mv(fileDir, function(err) {
    if (err)
     return res.status(500).send(err);
  
    res.send('File uploaded!');
   });
});

app.listen(port, () => {
  console.log(`App listening at ${base_url}:${port}`);
});
