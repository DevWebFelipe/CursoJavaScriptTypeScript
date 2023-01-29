const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');

// rotas da home
route.get('/',  homeController.paginaIncial);
route.post('/', homeController.tratarPost);

// rotas do usuario
route.get('/user', userController.paginaIncial);

module.exports = route;