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

export function createSubmitHandler(form, callback) {
    form.addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event);
    }
}

export function createChangeHandler(form) {
    form.addEventListener('change', onChange);

    function onChange(event) {
        const inputs = {
            'make': (value) => value.length > 3,
            'model': (value) => value.length > 3,
            'year': (value) => Number(value) >= 1950 && Number(value) <= 2050,
            'description': (value) => value.length > 10,
            'price': (value) => Number(value) > 0,
            'img': (value) => value.length > 0,
        }
    
        const input = event.target.name;
        const value = event.target.value;
        if (inputs[input] === undefined) {
            return;
        }
        if (inputs[input](value)) {
            event.target.classList.add('is-valid');
            event.target.classList.remove('is-invalid');
        } else {
            event.target.classList.remove('is-valid');
            event.target.classList.add('is-invalid');
        }
    }
}

export function createHeaderTemplate(userId) {
    const email = sessionStorage.getItem('email');
    if (email) {
        return html`
        <header>
            <h1><a href="/">Furniture Store</a></h1>
            <nav>
                <a id="catalogLink" href="/">Dashboard</a>
                <div id="user">
                    <a id="createLink" href="/create">Create Furniture</a>
                    <a id="profileLink" href="/my-furniture/${userId}" >My Publications</a>
                    <a id="logoutBtn" href="/logout">Logout</a>
                </div>
            </nav>
        </header>`;
    } else {
        return html`
        <header>
            <h1><a href="/">Furniture Store</a></h1>
            <nav>
                <a id="catalogLink" href="/">Dashboard</a>
                <div id="guest">
                    <a id="loginLink" href="/login">Login</a>
                    <a id="registerLink" href="/register">Register</a>
                </div>
            </nav>
        </header>`;
    }
}
