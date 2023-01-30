const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');

function meuMiddleware(req, res, next) {
  req.session = {nome: 'Felipe', sobrenome: 'Texeira'};
  console.log();
  console.log('Passou no middleware: meuMiddleware');
  console.log();
  next(); //sempre que for usar uma fução como middleware tem que chamar o next, tanto
  //na passagem de parametro quanto no fim da função, para que a próxima ação seja executada
  //caso contrário, vai cair em um loop infinito e não vai carregar a pagina
}

route.get('/', meuMiddleware, homeController.paginaIncial, function(req, res, next){
  console.log();
  console.log('Ainda não terminou a requisição');
  console.log(`Último middleware. Conteúdo da req.session.nome: ${req.session.nome}`);
});
route.post('/', homeController.tratarPost);

route.get('/user', userController.paginaIncial);

module.exports = route;