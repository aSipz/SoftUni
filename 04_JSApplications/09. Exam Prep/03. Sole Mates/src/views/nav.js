import { logout } from '../data/data.js';
import { html } from '../lib.js';
import { clearUserData } from '../util.js';

let context;

export function createNavTemplate(user, ctx) {
    context = ctx;
    return html`
<!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
  <div>
    <a href="/dashboard">Dashboard</a>
    <a href="/search">Search</a>
  </div>

  ${user
            ? html`
  <div class="user">
    <a href="/add">Add Pair</a>
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
    context.page.redirect('/dashboard');
}


