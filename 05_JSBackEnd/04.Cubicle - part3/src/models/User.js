const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password is too short!']
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