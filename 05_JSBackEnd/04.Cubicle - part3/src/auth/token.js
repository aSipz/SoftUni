const jwt = require('jsonwebtoken');

const secretKey = 'ultraSecretKey';
const options = { expiresIn: '1d' };

exports.encodeToken = (payload) => {
    return jwt.sign(payload, secretKey, options);
};

exports.decodeToken = (token) => {
    return jwt.decode(token, secretKey)
};