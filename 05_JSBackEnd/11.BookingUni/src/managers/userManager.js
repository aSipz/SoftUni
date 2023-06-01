const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../utils/jwt');

exports.getUserByUsername = (username) => User.findOne({ username });

exports.checkIfExist = (email, username) => User.findOne({ $or: [{ email }, { username }] });

exports.register = async (username, email, password) => {

    const newUser = await User.create({ username, email, password });;

    return token = jwt.encodeToken({ email, username, _id: newUser._id });
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

    return token = jwt.encodeToken({ email: user.email, _id: user._id, username });
};

// exports.addToBooked = (userId, hotelId) => User.findByIdAndUpdate(userId, { $addToSet: { booked: hotelId } });

// exports.addToOffered = (userId, hotelId) => User.findByIdAndUpdate(userId, { $addToSet: { offered: hotelId } });
