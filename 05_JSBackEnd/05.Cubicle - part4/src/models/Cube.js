const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        match: /^[A-Za-z0-9\s]{5,}$/
    },
    description: {
        type: String,
        required: true,
        minLength: 20,
        match: /^[A-Za-z0-9\s]{5,}$/
    },
    imageUrl: {
        type: String,
        required: true,
        validate: httpVal
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [{
        type: Schema.Types.ObjectId,
        ref: 'Accessory'
    }],
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = model('Cube', cubeSchema);