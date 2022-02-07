const express = require('express');
const router = express.Router();

const rutaUser = require('../controllers/user');
const { uploadSingle, uploadImatge } = require('../controllers/upload');


router.get('/user', rutaUser.user);

router.post('/upload', uploadSingle, uploadImatge);

router.post('/time', '');


module.exports = { router }