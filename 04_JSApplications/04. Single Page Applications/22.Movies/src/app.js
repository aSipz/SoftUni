import {homeView} from './navigation.js';
import {onLogin, onRegister} from './auth.js';

document.getElementById('login-form').addEventListener('submit', onLogin);
document.getElementById('register-form').addEventListener('submit', onRegister);

homeView();
