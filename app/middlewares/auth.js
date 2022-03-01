
const auth = (req, res, next) => {
  // Comprovem que hi ha nom d'usuari a l'autenticació i al body
  if (!req.headers.authorization || !req.body.user) {
    const err = new Error('Autentificació incorrecta');
    return res.status(401).json({ error: err.message });
  }

  // Comprovem si els noms d'usuari d'autenticació i body son iguals
  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');
  if (!username || username !== req.body.user) {
    const err = new Error('Nom d\'usuari incorrecte');
    return res.status(401).json({ error: err.message });
  }

  // Autenticació correcte
  req.user = username;
  next();
}

module.exports = auth;