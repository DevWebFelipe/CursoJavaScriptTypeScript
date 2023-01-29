const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

// rotas da home
route.get('/',  homeController.paginaIncial);
route.post('/', homeController.tratarPost);

// rotas do usuario
route.get('/user', userController.paginaIncial);

module.exports = route;