const noCache = (req, res, next) => {
  try {
    res.set('Cache-control', 'no-cache');
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = noCache;