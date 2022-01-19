const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
/* var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })
 */
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

app.post('/upload', upload.single('imatge'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
});

app.listen(port, () => {
  console.log(`App listening at ${base_url}:${port}`);
});
