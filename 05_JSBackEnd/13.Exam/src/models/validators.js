function httpValidator(val) {
    return val.startsWith('http://') || val.startsWith('https://')
}

const httpVal = [httpValidator, 'ImageUrl should start with http:// or https://'];

module.exports = {
    httpVal,
}