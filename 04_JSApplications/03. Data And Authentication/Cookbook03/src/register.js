function register() {
    const registerForm = document.getElementById('register');

    registerForm.addEventListener('submit', regUser);

    async function regUser(e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const { email, password, rePass } = Object.fromEntries(formData.entries());
        if (password != rePass) {
            return console.error("Password don't match!");
        }
        try {
            const response = await fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.status != 200) {
                throw new Error(data.message);
            }
            sessionStorage.setItem('accessToken', data.accessToken);
            window.location.pathname = '04_JSApplications/03.%20Data%20And%20Authentication/Cookbook03/index.html';
        } catch (err) {
            console.error(err.message);
        }
    }
}

register();