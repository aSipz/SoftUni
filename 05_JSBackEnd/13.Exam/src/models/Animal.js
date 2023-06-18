const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const animalSchema = new Schema({
    name: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [2, '{PATH} should be at least 2 characters long!']
    },
    kind: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [3, '{PATH} should be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, '{PATH} is required'],
        validate: httpVal,
    },
    years: {
        type: Number,
        required: [true, '{PATH} is required'],
        min: [1, 'Minimum for years is 1'],
        max: [100, 'Maximum for years is 100']
    },
    need: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [3, 'Needs of should be at least 3 characters long!'],
        maxLength: [20, 'Needs of should be maximum 20 characters long!']
    },
    description: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!'],
        maxLength: [50, '{PATH} should be maximum 50 characters long!']
    },
    location: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!'],
        maxLength: [15, '{PATH} should be maximum 15 characters long!']
    },
    donations: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Animal = model('Animal', animalSchema);

module.exports = Animal;

