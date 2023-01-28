const express = require('express');
const app = express();

/* OBS: sem esse comando, não será tratado o body das requisições */
app.use(express.urlencoded({extended: true}));

app.get('/',  (req, res) => {
  res.send(`
  <form action="/" method="POST"> 
  Nome: <input type="text" name="nome">
  Idade: <input type="text" name="idade">
  <button>Enviar formulário</button>
  </form>
  `)
});

app.get('/testes/:idUsuario?/:passaVariosParametros?', (req, res) => { 
  // /testes/3 -> valor do parametro
  // /testes/?chave1=valor1&chave2=valor2 -> ? inicia a QueryString, posso passar quantos parametros quiser
  // por body do formulário, tudo que tiver name vai retornor com chaves name=valor
  console.log(req.params); 
  console.log(req.query); 
  res.send(req.query);
})

app.post('/',  (req, res) => {
  console.log(req.body);              
  res.send(`Dados recebidos: <br> 
            Nome: ${req.body.nome} <br>
            Idade: ${req.body.idade}`)
});

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});