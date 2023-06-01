function httpValidator(val) {
    return val.startsWith('http://') || val.startsWith('https://')
}

function positiveValidator(val) {
    return val > 0;
}

function emailValidator(email) {
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    return pattern.test(email);
}

const httpVal = [httpValidator, 'ImageUrl should start with http:// or https://'];
const positiveVal = [positiveValidator, 'Number should be positive'];
const emailVal = [emailValidator, 'Email should be valid'];

module.exports = {
    httpVal,
    positiveVal,
    emailVal
}