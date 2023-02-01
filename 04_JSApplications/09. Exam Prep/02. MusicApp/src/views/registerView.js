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
            <form @submit=${createSubmitHandler(onSubmit)}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;
}

async function onSubmit(obj, event) {

    const {email, password} = obj;
    const rePass = obj['conf-pass'];
   
    if(!email || !password || password != rePass) {
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


