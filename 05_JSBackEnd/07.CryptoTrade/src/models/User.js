const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!']
    },
    email: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [10, '{PATH} should be at least 10 characters long!']
    },
    password: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [4, '{PATH} should be at least 4 characters long!']
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