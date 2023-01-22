import { checkUserNav } from './auth.js';

const views = {
    'logout': onLogout,
    'login': onLogin,
    'register': onRegister
}

const ctx = {
    goto,
    checkUserNav,
    render
}

function onNavigate(event) {
    if (event.target.tagName != 'A') {
        return;
    }
    const id = event.target.id;
    if (goto(id)) {
        event.preventDefault();
    }

}

function goto(viewName, ...params) {
    const view = views[viewName];
    if (typeof view == 'function') {
        view({ ctx }, ...params);
        return true;
    }

    return false;
}

function render(section) {
    document.querySelector('main').replaceChildren(section);
}