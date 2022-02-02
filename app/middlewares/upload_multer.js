const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'app/tmp/uploaded_img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  const mimetypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif"
  ];
  if (mimetypes.includes(file.mimetype)) {
    console.log("Tipus d'imatge correcte.");
    return cb(null, true);
  }
  return cb(console.error('Només es permet pujar imatges (png, jpg, gif)'), false);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
})


module.exports = upload;
