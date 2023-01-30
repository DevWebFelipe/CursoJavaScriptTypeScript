module.exports = (req, res, next) => {
  next();
};

exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.middlewareQualquer = (req, res, next) => {
  console.log('middlewareQualquer');
  next();
};