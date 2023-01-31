import { logout } from './data/data.js';
import { html, render, page } from './lib.js'
import { clearUserData, getUserData } from './util.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showModal } from './views/modal.js';
import { showMyTeams } from './views/myTeamsView.js';
import { showRegister } from './views/registerView.js';
import { showTeams } from './views/teamsView.js';

page(session);
page(decorateContext);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/teams', showTeams);
page('/details/:teamId', showDetails);
page('/edit/:teamId', showEdit);
page('/create', showCreate);
page('/my-teams', showMyTeams);
page.start();

function session(ctx, next) {
    const user = getUserData();
    if (user) {
        ctx.user = user;
    }
    next();
}

function decorateContext(ctx, next) {
    render(createNavTemplate(ctx.user, onLogout), document.querySelector('#titlebar'));

    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    };

    ctx.modal = showModal;

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

function createNavTemplate(user, logout) {
    return html`
        <a href="/" class="site-logo">Team Manager</a>
        <nav>
            <a href="/teams" class="action">Browse Teams</a>
            ${user
            ? html`
            <a href="/my-teams" class="action">My Teams</a>
            <a href="javascript:void(0)" class="action" @click="${logout}">Logout</a>`
            : html`
            <a href="/login" class="action">Login</a>
            <a href="/register" class="action">Register</a>`}
        </nav>`;
}

async function onLogout() {
    logout()
    clearUserData();
    page.redirect('/');
}

