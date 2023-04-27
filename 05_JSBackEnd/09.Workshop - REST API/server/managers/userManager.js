const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../utils/jwt');

exports.getUserByEmail = (email) => User.findOne({ email });

exports.register = async (email, password) => {

    const newUser = await User.create({ email, password });;

    const token = await jwt.encodeToken({ email, _id: newUser._id });

    return {
        accessToken: token,
        _id: newUser._id.toString(),
        email
    };
};

exports.login = async (email, password) => {
    const user = await this.getUserByEmail(email);

    if (!user) {
        const error = new Error('No such user or wrong password!');
        error.statusCode = 400;
        throw error;
    }

    const hash = user.password;

    const isCorrectPassword = await bcrypt.compare(password, hash);

    if (!isCorrectPassword) {
        const error = new Error('No such user or wrong password!');
        error.statusCode = 400;
        throw error;
    }

    const token = await jwt.encodeToken({ email, _id: user._id });

    return {
        accessToken: token,
        _id: user._id.toString(),
        email
    };
}