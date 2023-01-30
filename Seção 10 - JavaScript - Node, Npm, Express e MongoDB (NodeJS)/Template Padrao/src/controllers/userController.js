exports.paginaIncial = (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Usuário: <input type="text" name="nome">
  Login: <input type="text" name="idade">
  <button>Enviar usuário</button>
  </form>
  `)
};