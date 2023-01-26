import { page, render } from './lib.js';
import { showHome } from './views/homeView.js';

const body = document.querySelector('body');

page(createContext);
page('/index.html', '/');
page('/', showHome);
// page('/login', showLogin);
// page('/register', showRegister);
// page('/create', showCreate);
// page('/details/:furId', showDetails);
// page('/edit/:userId/:furId', showEdit);
// page('/my-furniture/:userId', showMyFur);

page.start();


function createContext(ctx, next) {
    ctx.render = content => render(content, body);
    next();
}