const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const hotelSchema = new Schema({
    hotel: {
        type: String,
        required: [true, 'Hotel name is required'],
        minLength: [4, 'Hotel name should be at least 4 characters long!'],
    },
    city: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [3, '{PATH} should be at least 3 characters long!'],
    },
    imgUrl: {
        type: String,
        required: [true, '{PATH} is required'],
        validate: httpVal,
    },
    'free-rooms': {
        type: Number,
        required: [true, '{PATH} is required'],
        min: [1, 'Minimum number of rooms is 1'],
        max: [100, 'Maximum number of rooms is 100']
    },
    guests: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;