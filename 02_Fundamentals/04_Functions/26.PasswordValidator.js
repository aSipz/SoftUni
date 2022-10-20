function passValidator(pass) {
    
    let lengthCheck = function(pass) {
        let result = true;
        if (!(pass.length >= 6 && pass.length <= 10)) {
            result = 'Password must be between 6 and 10 characters';
        }
        return result;
    }

    let charCheck = function(pass) {
        let result = true;
        let isValid = true;
        for (let i = 0; i < pass.length; i++) {
            if(!(pass[i].charCodeAt() >= 48 && pass[i].charCodeAt() <= 57
            || pass[i].charCodeAt() >= 65 && pass[i].charCodeAt() <= 90
            || pass[i].charCodeAt()>= 97 && pass[i].charCodeAt()<= 122)) {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            result = 'Password must consist only of letters and digits';
        }
        return result;
    }

    let digitCountCheck = function(pass) {
        let result = true;
        let digitCount = 0;
        for (let i = 0; i < pass.length; i++) {
            if(pass[i].charCodeAt() >= 48 && pass[i].charCodeAt() <= 57) {
                digitCount++;
            }
        }
        if (digitCount < 2) {
            result = 'Password must have at least 2 digits';
        }
        return result;
    }

    if (lengthCheck(pass) === true && charCheck(pass) === true && digitCountCheck(pass) === true) {
        console.log('Password is valid');
    } else {
        if (lengthCheck(pass) !== true) {
            console.log(lengthCheck(pass));
        }
        if (charCheck(pass) !== true) {
            console.log(charCheck(pass));
        }
        if (digitCountCheck(pass) !== true) {
            console.log(digitCountCheck(pass));
        }
    }
}
passValidator('Pa$s$s');