const express = require('express');
const router = express.Router();


const rutaUser = require('../controllers/user');
router.get('/user', rutaUser.user);


const { uploadSingle, uploadImatge } = require('../controllers/upload');
router.post('/upload', uploadSingle, uploadImatge);


const cors = require('cors');
const noCache = require('../middlewares/noCache');
const time = require('../controllers/time');
router.post(
  '/time',          // ruta
  cors(),           // cors (express)
  noCache,          // app/middlewares/noCache.js
  express.json(),   // per acceptar paràmetre json
  time              // retorna data/hora si hi ha parámetre usuari
);


module.exports = { router }