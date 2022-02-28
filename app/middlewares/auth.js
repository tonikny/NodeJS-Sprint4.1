
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log('Autentificació incorrecta');
    const err = new Error('Autentificació incorrecta');
    return res.status(401).send({error: err.message});
  }
  console.log('Atentificació correcta');
  next();
}

module.exports = auth;