import page from './lib/page.mjs';
import { render, html } from './lib/lit-html.js';
import {repeat} from './lib/directives/repeat.js';
import {until} from './lib/directives/until.js';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { addUserNav } from './middlewares/userNav.js';

import { showCreate } from './views/createView.js';
import { showCatalog } from './views/catalogView.js';
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { navTemplate } from './views/nav.js';
import { showHome } from './views/homeView.js';

import { getUserData } from './util.js';


const main = document.querySelector('main');
const nav = document.querySelector('header');

page(addRender(main, nav));
page(addSession(getUserData));
page(addUserNav(navTemplate));

page('/', showHome);
page('/rooms', showCatalog);
page('/login', showLogin);
page('/register', showRegister);
page('/rooms/:id', ({params: {id}})=> console.log('details', id));
page('/host', showCreate);

page.start();