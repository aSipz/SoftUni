import { logout } from './data/data.js';
import { html, render, page } from './lib.js'
import { clearUserData, getUserData } from './util.js';
import { showCreate } from './views/createView.js';
import { showDashboard } from './views/dashboardView.js';
import { showDetails } from './views/detailsView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';


page(session);
page(decorateContext);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);

page.start();

function session(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }
    next();
}

function decorateContext(ctx, next) {
    render(createNavTemplate(ctx.user), document.querySelector('header'));

    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    };

    next();
}

function parseQuery(ctx, next) {
    ctx.query = {};
    if (ctx.querystring) {
        const query = Object.fromEntries(ctx.querystring
            .split('&')
            .map(el => el.split('=')));
        Object.assign(ctx.query, query);
    }

    next();
}

function createNavTemplate(user) {
    return html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                ${user
            ? html`<li><a href="/create">Create Postcard</a></li>
                <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>`
            : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`}
        
            </ul>
        </nav>`;
}

async function onLogout() {
    logout()
    clearUserData();
    page.redirect('/');
}

