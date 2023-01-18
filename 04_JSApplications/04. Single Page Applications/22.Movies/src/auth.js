import {homeView} from './navigation.js';

export async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData);
    if (!email || !password || password != repeatPassword || password.length < 6) {
        alert('Invalid username/password');
        return;
    }
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        homeView();
    } catch (error) {
        console.log(error.message);
    }
}

export async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
        return;
    }
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        homeView();
    } catch (error) {
        console.log(error.message);
        alert("Email or password don't match\nTry again");
    }
}

export async function onLogout() {
    const token = sessionStorage.getItem('token');
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: { 'X-Authorization': token }
        });
        if (response.status != 204) {
            throw new Error;
        }
    } catch (err) {
        console.error(err);
    } finally {
        document.getElementById('welcome-msg').textContent = '';
        sessionStorage.clear();
    }
}