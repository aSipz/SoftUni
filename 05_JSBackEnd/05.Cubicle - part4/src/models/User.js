const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        unique: true,
        match: /^[A-Za-z0-9]{5,}$/
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password is too short!'],
        match: /^[A-Za-z0-9]{8,}$/
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