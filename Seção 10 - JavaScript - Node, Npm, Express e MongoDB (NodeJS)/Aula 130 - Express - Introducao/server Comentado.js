/* 
LocalHost -> Referece a porta local que também pode ser declarado com o seguinte IP -> 127.0.0.1
*/

const express = require('express');
const app = express();

// Quando criado uma API, ela deve ser capaz de realizar as ações abaixo
//         Criar    Ler    Alterar  Excluir  ->  Ações
// CRUD -> CREATE,  READ,  UPDATE,  DELETE   ->  Ações de CRUD
//         POST     GET    PUT      DELETE   ->  Métodos

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// em um get(simples, pois pode ter mais parametros em gets mais complexos)
// o parametro 0 seria a rota enquanto o parametro 1 seria uma função que recebe
// outros dois parametros, sendo eles requisicao -> o que o usuário pediu
// e resposta -> o que será retornado para esta requisicao
app.get('/', (requisicao, resposta) => {
  /* Até pode-se colocar um html aqui, mas normalmente são os views, mas deixei com
     html só pra ter como exemplo */ 
  resposta.send('Olá <b>mundo!</b>');
});

//Criando uma nova rota, a função, agora vou usar req e res (request e response respequitivamente)
//que se refere a requisicao e resposta
app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato, segue fone/whats +55 (48) 9 9841-2807 -> Felipe');
});

/* OBS: O erro 'Cannot GET /asdasd' será exibido quando uma rota for solicitada e não encontrada */

app.get('/formulario',  (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
});

/* OBS: o erro 'Cannot POST /' será exibido quando for utilizado um POST/enviar, mas a rota é chamada por um GET
   Dessa forma, é possível criar uma rota de cada tipo de ação para o mesmo 'caminho' por assim dizer,
   nesse caso eu teria um app.get, app.post, app.put e app.delete para a rota '/formulario' */

app.post('/formulario',  (req, res) => {
  res.send('Formulário recebido')
});

/* para que haja essa resposta, é preciso que o express fique na porta do computador
recebendo e respondendo o que chegar nela, assim como um server no delphi SBHotelServer -> SBHotel
da mesma maneira também, deve-se usar portas que normalmente vão estar livres, evitando por exemplo
a 3050 que o firebird usa */

/* para programar o express para ficar aguardando requisições será usada a função a seguir */
//app.listen(3000);

/* a título de teste, se eu quiser executar o servidor e exibir uma mensage no console.log é só passar uma função no segundo parametro */
const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});