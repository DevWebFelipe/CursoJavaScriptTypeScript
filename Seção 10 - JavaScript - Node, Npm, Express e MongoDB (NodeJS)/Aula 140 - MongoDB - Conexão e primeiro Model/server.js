require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('Banco de dados conectado');
  })
  .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');
const {middlewareGlobal} = require('./src/middleware/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(meuMiddleware);
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('Banco de dados conectado', () => {
  const portaServidor = 3000;
  app.listen(portaServidor, () => {
    console.log('Acessar servidor local http://127.0.0.1:' + portaServidor);
    console.log('servidor rodando na porta: ' + portaServidor);
  });
});