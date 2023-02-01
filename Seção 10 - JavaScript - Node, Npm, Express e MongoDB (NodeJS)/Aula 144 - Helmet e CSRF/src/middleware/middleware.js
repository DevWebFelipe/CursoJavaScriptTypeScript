exports.middlewareGlobal = (req, res, next) => {
  res.locals.respostaRota = 'Resposta enviada com sucesso';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};