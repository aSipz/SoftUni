import { login } from '../data/data.js';
import { html } from '../lib.js'
import { createHeaderTemplate, createSubmitHandler, setUserData } from '../util.js'

let ctx = null;

export function showLogin(newCtx, next) {

    ctx = newCtx;
    const href = ctx.path;

    ctx.render(createContent());
    document.querySelector(`nav [href="${href}"]`).classList.add('active');

    const form = document.querySelector('form');

    createSubmitHandler(form, onLogin);

}

async function onLogin({ email, password }, event) {
    if (!email || !password) {
        return;
    }
    event.target.reset();
    const data = await login(email, password);
    setUserData(data);

    ctx.page.redirect(`/`);
}

function createContent() {
    return html`
    ${createHeaderTemplate()}
    ${createLoginTemplate()}`
}


function createLoginTemplate() {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>`;
}