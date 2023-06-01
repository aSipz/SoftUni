const { Schema, model } = require('mongoose');

const { httpVal, positiveVal } = require('./validators');

const validPlatforms = ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];

const gameSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [4, '{PATH} should be at least 4 characters long!']
    },
    imageUrl: {
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
    platform: {
        type: String,
        enum: { values: validPlatforms, message: `{PATH} must be one of the following ${validPlatforms.join(', ')}` },
        required: [true, '{PATH} is required']
    },
    genre: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [2, '{PATH} should be at least 2 characters long!']
    },
    boughtBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Game = model('Game', gameSchema);

module.exports = Game;

