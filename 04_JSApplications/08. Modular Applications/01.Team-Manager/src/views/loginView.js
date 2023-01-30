import { login } from '../data/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler, setUserData } from '../util.js';

let ctx = null;

export function showLogin(context, next) {
    ctx = context

    ctx.render(createRegisterTemplate(onSubmit));

}

function createRegisterTemplate(onSubmit, error) {
    return html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form id="login-form" class="main-form pad-large" @submit=${createSubmitHandler(onSubmit)}>
                ${error && error.length ? html`<div class="error">${error.map(e => html`<p>${e}</p>`)}</div>` : nothing}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>`;
}

async function onSubmit({ email, password }, event) {
    const emailPattern = /^\w+@\w+(?:\.\w+)+$/;
    let error = [];
    if (!emailPattern.test(email)) {
        error.push('E-mail should be valid.');
    }
    if (password.length < 3) {
        error.push('Password should be at least 3 characters.');
    }
    if (error.length) {
        ctx.render(createLoginTemplate(onSubmit, error));
        return;
    }
    
    event.target.reset();
    const data = await login(email, password);
    setUserData(data);

    ctx.page.redirect('/');
}


