const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
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
        max: 7
    },
    accessories: [{
        type: Schema.Types.ObjectId,
        ref: 'Accessory'
    }],
});

module.exports = model('Cube', cubeSchema);