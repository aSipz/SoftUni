import { html } from './lib.js'

export function setUserData(data) {
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
}

export function clearUserData() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
}

export function createSubmitHandler(formId, callback) {
    document.getElementById(formId).addEventListener('click', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event);
    }
}

export function createHeaderTemplate() {
    const email = sessionStorage.getItem('email');
    if (email) {
        return html`
        <header>
            <h1><a href="/">Furniture Store</a></h1>
            <nav>
                <a id="catalogLink" href="/" class="active">Dashboard</a>
                <div id="user">
                    <a id="createLink" href="/create">Create Furniture</a>
                    <a id="logoutBtn" href="javascript:void(0)">Logout</a>
                </div>
            </nav>
        </header>`;
    } else {
        return html`
        <header>
            <h1><a href="/">Furniture Store</a></h1>
            <nav>
                <a id="catalogLink" href="/"  class="active">Dashboard</a>
                <div id="guest">
                    <a id="loginLink" href="/login">Login</a>
                    <a id="registerLink" href="/register">Register</a>
                </div>
            </nav>
        </header>`;
    }
}

export function createLoadingTemplate() {
    return html`
        ${createHeaderTemplate()}
        <p>Loading ...</p>`;
}