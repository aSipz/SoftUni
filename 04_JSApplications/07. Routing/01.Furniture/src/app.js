import { deleteItem, logout } from './data/data.js';
import { page, render } from './lib.js';
import { clearUserData } from './util.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';

const body = document.querySelector('body');

page(createContext);
page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/logout', onLogout);
page('/register', showRegister);
page('/create', showCreate);
page('/details/:furId', showDetails);
page('/edit/:furId', showEdit);
page('/delete/:furId', onDelete);
page('/my-furniture/:userId', showHome);

page.start();

function createContext(ctx, next) {
    ctx.render = content => render(content, body);
    next();
}

async function onLogout() {
    logout()
    clearUserData();
    page.redirect('/');
}

async function onDelete(ctx, next) {
    const id = ctx.params.furId;
    if (confirm('Do you really want to delete it?')) {
        await deleteItem(id);
        page.redirect('/');
    } else {
        return;
    }

}