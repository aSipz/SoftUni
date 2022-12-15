function encodeAndDecodeMessages() {
    let firstButton = document.getElementsByTagName('button')[0];
    let secondButton = document.getElementsByTagName('button')[1];
    let firstTextField = document.getElementsByTagName('textarea')[0];
    let secondTextField = document.getElementsByTagName('textarea')[1];
    let isDecoded = false;
    firstButton.addEventListener('click', function () {
        if (firstTextField.value) {
            let message = firstTextField.value;
            let result = message
                .split('')
                .map(a => String.fromCharCode(a.charCodeAt() + 1))
                .join('');
            secondTextField.value = result;
            firstTextField.value = '';
            isDecoded = false;
        }
    });
    secondButton.addEventListener('click', function () {
        if (secondTextField.value && !isDecoded) {
            let message = secondTextField.value;
            let result = message
                .split('')
                .map(a => String.fromCharCode(a.charCodeAt() - 1))
                .join('');
            secondTextField.value = result;
            isDecoded = true;
        }
    });
}