const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminho absoluto, pode ser passado o caminho relativo, mas
//segundo o instrutor, ele já teve problema com caminho na hora de subir uma aplicação
//então melhor passar o caminho absoluto
app.set('view engine', 'ejs');
//OBS: EJS é quase um HTML, só que pode-se usar códigos dentro, como IF, FOR etc

app.use(routes);

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});