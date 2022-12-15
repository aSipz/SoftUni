function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let input = document.getElementById('email');
    input.addEventListener('change', function(e){
        if (input.value.search(pattern) < 0) {
            input.classList = 'error';
        } else {
            input.classList.remove('error');
        }
    });
}