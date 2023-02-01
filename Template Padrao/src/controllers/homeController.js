exports.paginaIncial = (req, res) => {
  res.render('index');
  return;
};

exports.tratarPost = (req, res) => {
  res.send(req.body);
  return;
};