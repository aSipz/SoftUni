function validate() {
    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let confPassField = document.getElementById('confirm-password');
    let companyCheckBox = document.getElementById('company');
    let infoField = document.getElementById('companyInfo');
    let validDiv = document.getElementById('valid');
    let submitBtn = document.getElementById('submit');
    let usernamePattern = /^[A-Za-z\d]{3,20}$/;
    let passwordPattern = /^\w{5,15}$/;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    
    submitBtn.addEventListener('click', submit)
    companyCheckBox.addEventListener('change', companyInfo);

    function submit(e) {
        e.preventDefault();
        validDiv.style.display = 'none';
        let inputFields = Array.from(document.querySelectorAll('input'));
            inputFields.forEach(input => {
                input.style.border = 'none';
            });
        let isCorrect = true;
        if (!usernamePattern.test(usernameField.value)) {
            applyStyle(usernameField);
        }
        if (!passwordPattern.test(passwordField.value)) {
            applyStyle(passwordField);
            applyStyle(confPassField);
        }
        if (!passwordPattern.test(passwordField.value) || passwordField.value != confPassField.value) {
            applyStyle(confPassField);
            applyStyle(passwordField);
        }
        if (!emailPattern.test(emailField.value)) {
            applyStyle(emailField);
        }
        if (companyCheckBox.checked) {
            let numberField = document.getElementById('companyNumber');
            let number = Number(numberField.value);
            if (!numberField.value || number < 1000 || number > 9999) {
                isCorrect = false;
                numberField.style.border = '';
                numberField.style.borderColor = 'red';
            }
        }
        if (isCorrect) {
            validDiv.style.display = '';
        }

        function applyStyle(e) {
            e.style.border = '';
            e.style.borderColor = "red";
            isCorrect = false;
        }
    }

    function companyInfo(e) {
        if (e.target.checked) {
            infoField.style.display = 'block';
        } else {
            infoField.style.display = 'none'
        }
    }
}