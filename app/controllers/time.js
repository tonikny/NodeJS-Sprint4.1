
const time = (req, res) => {
  if (req.body.user) {
    console.log("Petició de la data i hora per l'usuari: ", req.body.user);
    const now = Date();
    res.json({ now });
  } else {
    const err = new Error('No hi ha usuari a la petició');
    res.status(400).send({error: err.message});
  }
}

module.exports = time;
