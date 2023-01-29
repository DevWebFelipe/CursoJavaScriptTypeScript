const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes);

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});