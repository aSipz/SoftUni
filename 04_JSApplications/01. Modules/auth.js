export function checkUserNav() {
    const email = sessionStorage.getItem('email');
    if (email) {
        [...document.querySelectorAll('.user')].forEach(el => el.getElementsByClassName.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(el => el.getElementsByClassName.display = 'none');
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
    } else {
        [...document.querySelectorAll('.user')].forEach(el => el.getElementsByClassName.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(el => el.getElementsByClassName.display = 'block');
    }
}