const httpVal = [httpValidator, 'ImageUrl should start with http:// or https://'];

function httpValidator(val) {
    return val.startsWith('http://') || val.startsWith('https://')
}

module.exports = {
    httpVal
}