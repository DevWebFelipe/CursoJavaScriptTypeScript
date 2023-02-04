import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Register from './modules/Register';
import Contato from './modules/Contatos';

const login = new Login('.form-login');
const cadastro = new Register('.form-cadastro');
const contatos = new Contato('.form-contato');

login.init();
cadastro.init();
contatos.init();
//import './assets/css/styles.css';