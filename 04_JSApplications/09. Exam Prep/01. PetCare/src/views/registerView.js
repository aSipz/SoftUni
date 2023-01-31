import { login, register } from '../data/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler, setUserData } from '../util.js';

let ctx = null;

export function showRegister(context, next) {
    ctx = context;

    ctx.render(createRegisterTemplate());

}

function createRegisterTemplate() {
    return html`
    <section id="registerPage">
            <form class="registerForm" @submit=${createSubmitHandler(onSubmit)}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>`;
}

async function onSubmit({ email, password, repeatPassword }, event) {
   
    if(!email || !password || password != repeatPassword) {
        return;
    }

    event.target.reset();
    try {
        const data = await register(email, password);
        setUserData(data);
        ctx.page.redirect('/');
    } catch (err) {
        alert(err);
    }
    
}


