const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');
const {middlewareGlobal, middlewareQualquer} = require('./src/middleware/middleware')

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(meuMiddleware);
app.use(middlewareGlobal);
app.use(middlewareQualquer);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

const portaServidor = 3000;
app.listen(portaServidor, () => {
  console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
  console.log('servidor rodando na porta: ' + portaServidor);
});