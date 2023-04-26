const mongoose = require('mongoose');

exports.getErrorMessage = (error) => {
    if (error instanceof mongoose.Error) {

        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log(errors[0]);
        return errors[0];
    }

    return error.message;
};