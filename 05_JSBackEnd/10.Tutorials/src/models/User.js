const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!'],
        match: [/[A-Za-z0-9]/, '{PATH} should consist only english letters and digits']
    },
    password: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!'],
        match: [/[A-Za-z0-9]/, '{PATH} should consist only english letters and digits']
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 4)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = model('User', userSchema);

module.exports = User;