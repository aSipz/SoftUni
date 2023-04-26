const router = require('express').Router();

const bookManager = require('../managers//bookManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getCatalogPage = async (req, res) => {

    try {
        const books = await bookManager.getAll().lean();
        res.render('books/catalog', { books });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

}

const getCreatePage = (req, res) => {
    res.render('books/create');
}

const postCreate = async (req, res, next) => {
    const bookData = req.body;
    const user = req.user;
    bookData.owner = user._id;

    try {
        const book = await bookManager.createBook(bookData);
        res.redirect(`/books/catalog`);
    } catch (error) {
        console.log(error);
        res.render('books/create', { error: getErrorMessage(error) });
    }
}

const getDetailsPage = async (req, res) => {
    const { bookId } = req.params;
    const user = req.user;

    try {
        const book = await bookManager.getBookById(bookId).lean();

        book.isOwner = book.owner == user?._id;
        book.wished = book.wishes
            .map(id => id.toString())
            .includes(user?._id);

        res.render('books/details', book);
    } catch (error) {
        console.log(error);
        res.render('404', { error: 'There is not such book review' });
    }

}

const getEditPage = async (req, res) => {
    const { bookId } = req.params;
    const user = req.user;

    try {
        const book = await bookManager.getBookById(bookId).lean();
        if (book.owner != user._id) {
            throw new Error('You are not an owner of this book review!');
        }
        res.render('books/edit', book);
    } catch (error) {
        res.redirect('/404');
    }

}

const postEdit = async (req, res) => {
    const { bookId } = req.params;
    const bookData = req.body;

    try {
        const result = await bookManager.updateBook(bookId, bookData);
        res.redirect(`/books/${result._id}/details`);
    } catch (error) {
        console.log(error);

        const book = await bookManager.getBookById(bookId).lean();

        res.render('books/edit', { error: getErrorMessage(error), ...book });
    }
}

const getDelete = async (req, res) => {
    const { bookId } = req.params;
    try {
        await bookManager.deleteBook(bookId);
        res.redirect('/books/catalog');
    } catch (error) {
        res.redirect('/404');
    }
}

const getWish = async (req, res) => {
    const { bookId } = req.params;
    const user = req.user;

    try {
        await bookManager.wishBook(bookId, user._id);
        res.redirect(`/books/${bookId}/details`);
    } catch (error) {
        console.log(error);
        res.render('404', { error: getErrorMessage(error) });
    }
}

router.get('/catalog', getCatalogPage);

router.get('/:bookId/details', getDetailsPage);

router.get('/create-review', privateGuard, getCreatePage);
router.post('/create-review', privateGuard, postCreate);

router.get('/:bookId/edit', privateGuard, getEditPage);
router.post('/:bookId/edit', privateGuard, postEdit);

router.get('/:bookId/delete', privateGuard, getDelete);

router.get('/:bookId/wish', privateGuard, getWish);

module.exports = router;