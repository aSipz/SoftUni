const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../utils/jwt');

exports.getUserByEmail = (email) => User.findOne({ email });

exports.register = async (username, email, password) => {

    const newUser = await User.create({ username, email, password });;

    return token = jwt.encodeToken({ email, username, _id: newUser._id });
};

exports.login = async (email, password) => {
    const user = await this.getUserByEmail(email);

    if (!user) {
        throw new Error('No such user or wrong password!');
    }

    const hash = user.password;

    const isCorrectPassword = await bcrypt.compare(password, hash);

    if (!isCorrectPassword) {
        throw new Error('No such user or wrong password!');
    }

    return token = jwt.encodeToken({ email, _id: user._id, username: user.username });
}