import { createLoginForm, createRegisterForm } from './createElements.js';
import { onLogout } from './auth.js';

const navBar = document.querySelector('nav');
const userNavList = document.querySelectorAll('.user');
const guestNavList = document.querySelectorAll('.guest');
const welcomeMsg = document.getElementById('welcome-msg')
const sections = document.querySelectorAll('div > section');
const homePage = document.getElementById('home-page');
const loginPage = document.getElementById('form-login');
const loginForm = document.getElementById('login-form');
const registerPage = document.getElementById('form-sign-up');
const registerForm = document.getElementById('register-form');
const detailsSection = document.getElementById('movie-example')

navBar.addEventListener('click', navigation);

const navOptions = {
    'Movies': homeView,
    'Login': loginView,
    'Logout': logout,
    'Register': registerView
}

async function logout() {
    await onLogout();
    [...userNavList].forEach(e => e.style.display = 'none');
    [...guestNavList].forEach(e => e.style.display = 'block');
    loginView();
}

export function homeView() {
    [...sections].forEach(s => s.style.display = 'none');
    homePage.style.display = 'block';
    [...document.querySelectorAll('form')].forEach(e => e.textContent = '');
    detailsSection.textContent = '';
    if (sessionStorage.getItem('token')) {
        [...userNavList].forEach(e => e.style.display = 'block');
        [...guestNavList].forEach(e => e.style.display = 'none');
        welcomeMsg.textContent = `Welcome, ${sessionStorage.getItem('email')}`;
    } else {
        [...userNavList].forEach(e => e.style.display = 'none');
        [...guestNavList].forEach(e => e.style.display = 'block');
    }
}

function loginView() {
    [...sections].forEach(s => s.style.display = 'none');
    loginPage.style.display = 'block';
    if (!loginForm.textContent) {
        loginForm.appendChild(createLoginForm());
    }
}

function registerView() {
    [...sections].forEach(s => s.style.display = 'none');
    registerPage.style.display = 'block';
    if (!registerForm.textContent) {
        registerForm.appendChild(createRegisterForm());
    }
}

function navigation(e) {
    if (e.target.tagName != 'A' || e.target.id == 'welcome-msg') {
        return;
    }
    navOptions[e.target.textContent]();
}

