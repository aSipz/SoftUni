const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', login);

async function login(e) {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const { email, password } = Object.fromEntries(formData.entries());
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
        window.location.pathname = 'index.html';
    } catch (err) {
        console.error(err);
    }
}