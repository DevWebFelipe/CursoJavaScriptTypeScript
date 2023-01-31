exports.paginaIncial = (req, res) => {
  res.render('index', {
    titulo: 'Título enviado pelo <span style="color: red;">JS</span> no homeController',
    titulo2: 'Título 2 criado pra teste',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.tratarPost = (req, res) => {
  res.send(req.body);
  return;
};