const userDiv = document.getElementById('user');
const formRegister = document.getElementById('register');
const navBtnsList = Array.from(document.querySelectorAll('nav a'));

userDiv.style.display = 'none';

navBtnsList.forEach(btn => {
    if (btn.id == 'registerBtn') {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});
debugger

formRegister.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();
    const formData = new FormData(formRegister);
    const { email, password, rePass } = Object.fromEntries(formData.entries());
    if (!email || !password || password != rePass) {
        alert('Invalid username/password');
        formRegister.reset();
        return;
    }
    debugger
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
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error.message);
    }
}