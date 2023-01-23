import { post } from './api.js';
import { createSubmitHandler, setUserData } from './util.js';

createSubmitHandler('register-form', onRegister);

const div = document.getElementById('register');
div.querySelector('a').addEventListener('click', loginView);
div.remove();

let ctx = null;

export function registerView(newCtx) {
    ctx = newCtx;
    ctx.render(div, 'register-view');

}

async function onRegister({ email, password, repeatPassword }, e) {

    try {
        if (email.length < 3 || password.length < 3 || password != repeatPassword) {
            throw new Error('Email should be at least 3 characters\nPassword should be at least 3 characters\nPasswords should match');
        }
        e.target.reset();
        const data = await post('/users/register', { email, password });
        setUserData(data);
        ctx.goto('home-view');
    } catch (err) {
        alert(err.message);
    }
}

function loginView() {
    ctx.goto('login-view')
}