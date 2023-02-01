import { logout } from './data/data.js';
import { html, render, page } from './lib.js'
import { clearUserData, getUserData } from './util.js';
import { showCatalog } from './views/catalogView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showSearch } from './views/searchView.js';


page(session);
page(decorateContext);
page(parseQuery);
page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);

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
            <img src="./images/headphones.png">
            <a href="/">Home</a>
            <ul>
    
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>
                ${user
                ? html`
                <li><a href="/create">Create Album</a></li>
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

