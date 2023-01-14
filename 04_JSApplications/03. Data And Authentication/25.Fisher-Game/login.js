const userDiv = document.getElementById('user');
const formLogin = document.getElementById('login');
const navBtnsList = Array.from(document.querySelectorAll('nav a'));

userDiv.style.display = 'none';

navBtnsList.forEach(btn => {
    if (btn.id == 'loginBtn') {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

formLogin.addEventListener('submit', login);

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
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error.message);
        alert("Email or password don't match\nTry again");
    }
}