const express = require('express');
const app = express();

// Quando criado uma API, ela deve ser capaz de realizar as ações abaixo
//         Criar    Ler    Alterar  Excluir  ->  Ações
// CRUD -> CREATE,  READ,  UPDATE,  DELETE   ->  Ações de CRUD
//         POST     GET    PUT      DELETE   ->  Métodos

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

/*app.get('/', (requisicao, resposta) => {
  resposta.send('Olá <b>mundo!</b>');
});*/

app.get('/',  (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
});

app.post('/',  (req, res) => {
  res.send('Formulário recebido')
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato, segue fone/whats +55 (48) 9 9841-2807 -> Felipe');
});

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});