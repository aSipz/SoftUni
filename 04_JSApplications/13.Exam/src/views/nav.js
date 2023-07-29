import { logout } from '../data/data.js';
import { html } from '../lib.js';
import { clearUserData } from '../util.js';

let ctx = null;

export function createNavTemplate(user, context) {

    ctx = context;
    return html`
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Fun Facts</a>
          </div>

          <!-- Logged-in users -->
          ${user
            ? html`
          <div class="user">
            <a href="/add">Add Fact</a>
            <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
          </div>`
            : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        </nav>`;
}

async function onLogout() {
    logout()
    clearUserData();
    ctx.page.redirect('/');
}
