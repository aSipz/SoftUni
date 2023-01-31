import { login } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler, setUserData } from '../util.js';

let ctx = null;

export function showLogin(context, next) {
    ctx = context;

    ctx.render(createRegisterTemplate());

}

function createRegisterTemplate() {
    return html`
    <section id="loginPage">
        <form class="loginForm" @submit=${createSubmitHandler(onSubmit)}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Login</h2>
    
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Login</button>
    
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>`;
}

async function onSubmit({ email, password }, event) {

    if (!email || !password) {
        return;
    }

    event.target.reset();

    try {
        const data = await login(email, password);
        setUserData(data);
        ctx.page.redirect('/');
    } catch (err) {
        alert(err);
    }

}


