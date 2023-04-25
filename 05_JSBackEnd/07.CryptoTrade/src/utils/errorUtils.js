const mongoose = require('mongoose');

exports.getErrorMessage = (error) => {
    if (error instanceof mongoose.MongooseError) {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)[0];
        return errors[0];
    }

    return error.message;
};