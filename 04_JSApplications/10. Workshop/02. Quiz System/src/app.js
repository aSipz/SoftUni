import page from './lib/page.mjs';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { addUserNav } from './middlewares/userNav.js';
import { preloadQuestion, preloadQuiz } from './middlewares/preloader.js';
import { hasUser, isOwner } from './middlewares/guards.js';

import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { navTemplate } from './views/nav.js';
import { showBrowse } from './views/browseView.js';
import { showHome } from './views/homeView.js';
import { showCreate } from './views/createView.js';
import { showEdit } from './views/editView.js';

// import { showDetails } from './views/detailsView.js';
// import { showCatalog } from './views/catalogView.js';

import { getUserData } from './util.js';


const main = document.getElementById('content');
const nav = document.getElementById('titlebar');

page(addRender(main, nav));
page(addSession(getUserData));
page(addUserNav(navTemplate));

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/browse', showBrowse)
page('/create', hasUser(), showCreate);
page('/edit/:id', preloadQuiz('id'), preloadQuestion('id'), isOwner(), showEdit);

// page('/rooms/:id', preloadRoom('id', 'room'), showDetails);
// page('/rooms', showCatalog);

page.start();