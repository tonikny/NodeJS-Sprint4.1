const multer = require('multer')
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

const upload = multer({ dest: 'uploads/' })
const uploadSingle = upload.single('imatge');

const uploadImatge = (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("S'ha de pujar una imatge");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
}

module.exports = { uploadSingle, uploadImatge }

