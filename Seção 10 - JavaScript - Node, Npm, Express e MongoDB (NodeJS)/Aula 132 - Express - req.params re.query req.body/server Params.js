const express = require('express');
const app = express();

// http://meusite.com/users/
// ? -> inicia os Query Strings
// são parametros que podemos passar na URL do site
//                              
//EX: http://meusite.com/users/ 12345       -> Parametros
//                              ?           -> Inicia Query Strings
//                              nome=Felipe -> Query Strings - Par de valores composto por 
//                                             nome do campo onde deve ser verificado e valor do campo que deve verificar
//                              &           -> Finaliza uma Query String para iniciar outra
//                              senha=123   -> 2ª Quary String

// Ficará -> http://meusite.com/users/12345?nome=Felipe&senha=123

app.get('/',  (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Outro teste: <input type="text" name="nome">
  <button>Enviar formulário</button>
  </form>
  `)
});

// para receber um parametro, basta passar ele com :
// similar ao que é feito para parametros no firebird

//app.get('/testes/:idUsuario', (req, res) => { // dessa forma, o parametro fica como obrigatorio, 
  //de modo que sem ele vai dar erro ao carregar a pagina, para torna-lo 'opcional', teria que colocar ? no final
  //segue exemplo abaixo

app.get('/testes/:idUsuario?/:passaVariosParametros?', (req, res) => { 
  console.log(req.params); //como eu 'capturei' o parametro aqui, posso usa-lo
  res.send(req.params);
})

app.post('/',  (req, res) => {
  res.send('Formulário recebido')
});

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});