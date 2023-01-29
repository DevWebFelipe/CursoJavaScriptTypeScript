exports.paginaIncial = (req, res) => {
  res.render('index');
};

exports.tratarPost = (req, res) => {
  res.send('Rota de post tratada');
};