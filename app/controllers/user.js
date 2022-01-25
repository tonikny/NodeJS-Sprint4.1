let userData = require('../models/user');

const user = (req, res) => {
  const url = req.protocol + '://' + req.headers.host + req.url;
  userData.url = url;
  res.send(userData);
}

module.exports = { user }