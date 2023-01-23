import { get } from './api.js';
import { createView } from './create.js';
import { dashboardView } from './dashboard.js';
import { detailsView } from './details.js';
import { homeView } from './home.js';
import { loginView } from './login.js';
import { registerView } from './register.js';
import { clearUserData } from './util.js';


const nav = document.querySelector('body nav');
const footer = document.querySelector('body footer');

nav.addEventListener('click', onNavigate);

const views = {
    'home-view': homeView,
    'register-view': registerView,
    'login-view': loginView,
    'dashboard-view': dashboardView,
    'logout-view': onLogout,
    'create-view': createView,
    'details-view': detailsView
}

const ctx = {
    goto,
    checkUserNav,
    render
}

checkUserNav();

goto('home-view');

function onNavigate(event) {
    if (event.target.tagName != 'A' && event.target.tagName != 'IMG') {
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
        view(ctx, ...params);
        return true;
    }

    return false;
}

function render(div, viewId) {
    document.querySelector('body').replaceChildren(nav, div, footer);
    [...document.querySelectorAll('nav li')].forEach(el => el.classList.remove('active'));
    if (viewId) {
        document.getElementById(viewId).parentElement.classList.add('active');
    }
}

async function onLogout() {
    const data = await get('/users/logout');
    clearUserData();
    goto('home-view');
}

function checkUserNav() {
    const email = localStorage.getItem('email');
    if (email) {
        [...document.querySelectorAll('[data-class="user"]')].forEach(el => el.style.display = 'block');
        [...document.querySelectorAll('[data-class="guest"]')].forEach(el => el.style.display = 'none');
    } else {
        [...document.querySelectorAll('[data-class="user"]')].forEach(el => el.style.display = 'none');
        [...document.querySelectorAll('[data-class="guest"]')].forEach(el => el.style.display = 'block');
    }
}