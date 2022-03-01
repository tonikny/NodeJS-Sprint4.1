
const time = (req, res) => {
  console.log("Petició de la data i hora per l'usuari:", req.user);
  const now = Date();
  res.json({ now });
}

module.exports = time;
