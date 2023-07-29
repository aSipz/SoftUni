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
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${createSubmitHandler(onSubmit)}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`;
}

async function onSubmit(obj, event) {

    const { email, password } = obj;
    const rePass = obj['re-password'];

    if (!email || !password || password != rePass) {
        return alert('All fields are required!');
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


