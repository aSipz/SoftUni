import { register } from '../data/data.js';
import { html } from '../lib.js'
import { createHeaderTemplate, createSubmitHandler, setUserData } from '../util.js'

let ctx = null;

export function showRegister(newCtx, next) {

    ctx = newCtx;

    const href = ctx.path;

    ctx.render(createContent());
    document.querySelector(`nav [href="${href}"]`).classList.add('active');

    const form = document.querySelector('form');

    createSubmitHandler(form, onRegister);

}

async function onRegister({ email, password, rePass }, event) {
    if (!email || !password || password !== rePass) {
        return;
    }
    event.target.reset();
    const data = await register(email, password);
    setUserData(data);

    ctx.page.redirect(`/`);
}

function createContent() {
    return html`
    ${createHeaderTemplate()}
    ${createRegisterTemplate()}`
}


function createRegisterTemplate() {
    return html`
    <<div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>`;
}