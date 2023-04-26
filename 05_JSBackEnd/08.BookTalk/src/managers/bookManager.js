const Book = require('../models//Book');

exports.getBookById = bookId => Book.findById(bookId);

exports.getAll = () => Book.find();

exports.getByUserWishes = (userId) => Book.find({ wishes: { $in: userId } });

exports.getSix = () => Book.find().sort('-price').limit(6);

exports.createBook = bookData => Book.create(bookData);

exports.updateBook = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData, { runValidators: true });

exports.deleteBook = bookId => Book.findByIdAndDelete(bookId);

exports.wishBook = async (bookId, wisherId) => {
    const currentBook = await this.getBookById(bookId);

    if (currentBook.wishes.map(id => id.toString()).includes(wisherId) || currentBook.owner == wisherId) {
        throw new Error('Unauthorized operation');
    }

    currentBook.wishes.push(wisherId);
    await currentBook.save();

    // Book.findByIdAndUpdate(bookId, { $push: { wishes: wisherId } });
};