const { Schema, model } = require('mongoose');

const { httpVal } = require('./validators');

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [2, '{PATH} should be at least 2 characters long!']
    },
    author: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [5, '{PATH} should be at least 5 characters long!']
    },
    genre: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [3, '{PATH} should be at least 3 characters long!']
    },
    stars: {
        type: Number,
        required: [true, '{PATH} is required'],
        min: [1, '{PATH} should be a number between 1 and 5!'],
        max: [5, '{PATH} should be a number between 1 and 5!'],
    },
    image: {
        type: String,
        required: [true, '{PATH} is required'],
        validate: httpVal,
    },
    review: {
        type: String,
        required: [true, '{PATH} is required'],
        minLength: [10, '{PATH} should be at least 10 characters long!']
    },
    wishes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Book = model('Book', bookSchema);

module.exports = Book;