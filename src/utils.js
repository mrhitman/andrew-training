function logger(req, res, next) {
  console.log(`[${new Date()}] ${req.method} ${JSON.stringify(req.params)}`);
  next();
}

module.exports = {
  logger,
};
