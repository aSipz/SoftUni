import { login, register } from '../data/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler, setUserData } from '../util.js';

let ctx = null;

export function showRegister(context, next) {
    ctx = context

    ctx.render(createRegisterTemplate(onSubmit));

}

function createRegisterTemplate(onSubmit, error) {
    return html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form id="register-form" class="main-form pad-large" @submit=${createSubmitHandler(onSubmit)}>
                ${error && error.length ? html`<div class="error">${error.map(e => html`<p>${e}</p>`)}</div>` : nothing}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>`;
}

async function onSubmit({ email, username, password, repass }, event) {
    const emailPattern = /^(?:\w+\.*)+@\w+(?:\.\w+)+$/;
    let error = [];
    if (!emailPattern.test(email)) {
        error.push('E-mail should be valid.');
    }
    if (password.length < 3) {
        error.push('Password should be at least 3 characters.');
    }
    if (username.length < 3) {
        error.push('Username should be at least 3 characters.');
    }
    if (password != repass) {
        error.push('Password should match.');
    }
    if (error.length) {
        ctx.render(createRegisterTemplate(onSubmit, error));
        return;
    }

    event.target.reset();
    const data = await register(email, username, password);
    setUserData(data);

    ctx.page.redirect('/my-teams');
}


