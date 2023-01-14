const formRegister = document.querySelector('form');
const formLogin = document.querySelectorAll('form')[1];

formLogin.addEventListener('submit', login);
formRegister.addEventListener('submit', register);

async function login(e) {
    e.preventDefault();
    const formData = new FormData(formLogin);
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
        return;
    }
    formLogin.reset();
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
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        window.location.href = 'homeLogged.html';
    } catch (error) {
        console.log(error.message);
        alert("Email or password don't match\nTry again");
    }
}

async function register(e) {
    e.preventDefault();
    const formData = new FormData(formRegister);
    const { email, password, rePass } = Object.fromEntries(formData);
    if (!email || !password || password != rePass) {
        return;
    }
    formRegister.reset();
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
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        window.location = 'homeLogged.html';
    } catch (error) {
        console.log(error.message);
    }
}