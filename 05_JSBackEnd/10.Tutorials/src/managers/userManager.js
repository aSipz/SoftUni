const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../utils/jwt');

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = async (username, password) => {

    const newUser = await User.create({ username, password });;

    return token = jwt.encodeToken({ username, _id: newUser._id });
};

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    if (!user) {
        throw new Error('No such user or wrong password!');
    }

    const hash = user.password;

    const isCorrectPassword = await bcrypt.compare(password, hash);

    if (!isCorrectPassword) {
        throw new Error('No such user or wrong password!');
    }

    return token = jwt.encodeToken({ _id: user._id, username });
}