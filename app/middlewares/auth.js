
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log('Autentificaci√≥ incorrecta');
    const err = new Error('Autentificaci√≥ incorrecta');
    return res.status(401).send({error: err.message});
  }
  console.log('Atentificaci√≥ correcta');
  next();
}

module.exports = auth;