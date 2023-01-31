exports.paginaIncial = (req, res) => {
  /*
  req.session.usuario = {nome: 'Felipe', logado: true};
  req.flash('info', 'Seja bem vindo');
  req.flash('error', 'Erro! entre em contato com o analista responsável');
  req.flash('succes', 'Rotina executada com sucesso');
  console.log(req.flash('info'), req.flash('error'), req.flash('succes'));
  */

  res.render('index');
  return;
};

exports.tratarPost = (req, res) => {
  res.send(req.body);
  return;
};