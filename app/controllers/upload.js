const upload = require('../middlewares/upload_multer');

const uploadSingle = upload.single('imatge');

const uploadImatge = (req, res, next) => {
  const file = req.file;
  if (!file) {
    const err = new Error("S'ha de pujar una imatge");
    return res.status(400).send({error: err.message});
  }
  console.log('Imatge pujada correctament');
  res.send(file);
}

module.exports = { uploadSingle, uploadImatge }
