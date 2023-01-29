exports.paginaIncial = (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Nome: <input type="text" name="nome">
  Idade: <input type="text" name="idade">
  <button>Enviar formulário</button>
  </form>
  `)
};

exports.tratarPost = (req, res) => {
  res.send('Rota de post tratada');
};