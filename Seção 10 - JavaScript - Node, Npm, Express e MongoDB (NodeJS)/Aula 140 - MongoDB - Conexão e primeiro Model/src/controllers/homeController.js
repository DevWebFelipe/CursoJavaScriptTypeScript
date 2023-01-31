const HomeModel = require('../models/HomeModel');

/*
HomeModel.create({
  titulo: 'Felipe Texeira',
  id: '2',
  descricao: 'Cadastro de teste feito em maquina local com servidor MongoDB'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));
*/

  HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaIncial = (req, res) => {
  res.render('index');
  return;
};

exports.tratarPost = (req, res) => {
  res.send(req.body);
  return;
};