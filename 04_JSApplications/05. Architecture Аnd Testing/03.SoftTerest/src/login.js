import { post } from './api.js';
import { createSubmitHandler, setUserData } from './util.js';

createSubmitHandler('login-form', onLogin);

const div = document.getElementById('login');
div.querySelector('a').addEventListener('click', registerView);
div.remove();

let ctx = null;

export function loginView(newCtx) {
    ctx = newCtx;
    ctx.render(div, 'login-view');

}

async function onLogin({ email, password }, e) {
    try {
        if (email.length == 0 || password.length == 0) {
            throw new Error('Please fill all fields');
        }
        e.target.reset();
        const data = await post('/users/login', { email, password });
        setUserData(data);
        ctx.goto('home-view');
    } catch (err) {
        alert(err.message);
    }
}

function registerView() {
    ctx.goto('register-view');
}