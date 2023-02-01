import { login } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler, setUserData } from '../util.js';

let ctx = null;

export function showLogin(context, next) {
    ctx = context;

    ctx.render(createLoginTemplate());

}

function createLoginTemplate() {
    return html`
    <section id="loginPage">
            <form @submit=${createSubmitHandler(onSubmit)}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
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


