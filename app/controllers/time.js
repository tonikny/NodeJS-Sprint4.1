
const time = (req, res) => {
  const now = Date.now();
  res.send(now);
}

module.exports = { time }