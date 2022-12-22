function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', e => {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!pattern.test(e.target.value)) {
            e.target.classList = 'error';
        } else {
            e.target.classList.remove('error');
        }
    });
}