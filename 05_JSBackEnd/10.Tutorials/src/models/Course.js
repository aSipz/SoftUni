const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [4, '{PATH} should be at least 4 characters long!']
    },
    description: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [20, '{PATH} should be at least 20 characters long!']
    },
    duration: {
        type: String
    },
    imageUrl: {
        type: String,
        required: [true, '{PATH} is required'],
        validate: httpVal,
    },
    enrolled: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Course = model('Course', courseSchema);

module.exports = Course;