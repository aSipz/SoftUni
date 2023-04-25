const { Schema, model } = require('mongoose');

const { httpVal, positiveVal } = require('./validators');

const validPaymentMethods = ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'];

const cryptoSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [2, '{PATH} should be at least 2 characters long!']
    },
    image: {
        type: String,
        required: [true, '{PATH} is required'],
        validate: httpVal,
    },
    price: {
        type: Number,
        required: [true, '{PATH} is required'],
        validate: positiveVal,
    },
    description: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [10, '{PATH} should be at least 10 characters long!']
    },
    paymentMethod: {
        type: String,
        enum: { values: validPaymentMethods, message: `{PATH} must be one of the following ${validPaymentMethods.join(', ')}` },
        required: [true, '{PATH} is required']
    },
    buy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;

