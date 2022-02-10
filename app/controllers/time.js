
const time = (req, res) => {
  if (req.body.user) {
    console.log("Petició de la data i hora per l'usuari: ", req.body.user);
    const now = Date();
    res.json({ now });
  } else {
    res.send('No hi ha usuari a la peticio');
  }
}

module.exports = time;
