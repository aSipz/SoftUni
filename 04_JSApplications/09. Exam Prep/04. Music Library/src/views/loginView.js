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
     <!-- Login Page (Only for Guest users) -->
     <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form" @submit=${createSubmitHandler(onSubmit)}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>`;
}

async function onSubmit({ email, password }, event) {

    if (!email || !password) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const data = await login(email, password);
        setUserData(data);
        ctx.page.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }

}


