exports.paginaIncial = (req, res, next) => {
  console.log('Respondendo ao cliente')
  res.render('index');
  console.log(`Conteúdo da req.session.nome: ${req.session.nome}`);
  next();
};

exports.tratarPost = (req, res, next) => {
  res.send('Rota de post tratada');
};