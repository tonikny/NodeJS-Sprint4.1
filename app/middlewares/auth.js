
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    console.log('Autentificació incorrecta');
    return res.status(401).send("Unauthorized");
  }
  console.log('Atentificació correcta');
  next();
}

module.exports = auth;