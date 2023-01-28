/* no terminal, instalar o NODEMON que vai fazer a autualização do servidor
automaticamente, sem a necessidade de parar e executar novamente cada vez que for feita alguma
modificação no código dos arquivos do projeto

abrir o terminal na pasta do servidor e executar o seguinte comando

--                         NPM INSTALL NODEMON --SAVE-DEV

vai instar como dependência de desenvolvimento no PACKAGE.JSON

vai ter duas formas de executar o nodemon

1º -> no terminal executar o seguiunte comando

--                         NPX NODEMON SERVER.JS

Onde SERVER.JS será o nome do arquivo para o qual é desejado rodar o NODEMON

2º -> no scriot do PACKAGE.JSON

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },

Trocar o "start": "node server.js" por "start": "nodemon server.js"

OBS: Pode ocorrer de no arquivo PACKAGE.JSON não ter a linha "start": "node server.js"
nesse caso, é só adicionar, é um JSON, então basta colocar a vígrula na primeira chave que é TEST
e adicionar a segunda chave que é a START
*/

const express = require('express');
const app = express();

app.get('/',  (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar formulário</button>
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