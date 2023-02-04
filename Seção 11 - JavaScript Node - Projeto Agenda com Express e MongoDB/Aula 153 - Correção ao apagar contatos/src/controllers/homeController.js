const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
  const contatos = await Contato.getLista();
  res.render('index', { contatos });
};