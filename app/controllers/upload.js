const upload = require('../middlewares/upload_multer');

const uploadSingle = upload.single('imatge');

const uploadImatge = (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("S'ha de pujar una imatge");
    error.httpStatusCode = 400;
    return next(error);
  }
  console.log('Imatge pujada correctament');
  res.send(file);
}

module.exports = { uploadSingle, uploadImatge }
