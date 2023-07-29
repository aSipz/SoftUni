import { page } from './lib.js'

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { addUserNav } from './middlewares/userNav.js';
import { addQuery } from './middlewares/query.js';

import { createNavTemplate } from './views/nav.js';
import { showCatalog } from './views/catalogView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/detailsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';

import { getUserData } from './util.js';

const main = document.querySelector('main');
const nav = document.querySelector('header');

page(addRender(main, nav));
page(addSession(getUserData));
page(addUserNav(createNavTemplate));
page(addQuery());

page('/index.html', '/');
page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showCatalog);
page('/add', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page.start();
