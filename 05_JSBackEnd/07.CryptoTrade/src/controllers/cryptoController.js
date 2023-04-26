const router = require('express').Router();

const cryptoManager = require('../managers/cryptoManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { generatePaymentMethod } = require('../utils/cryptoUtils');
const { generateErrorMessage } = require('../utils/modelUtils');

const getCatalogPage = async (req, res) => {

    try {
        const crypto = await cryptoManager.getCrypto().lean();
        res.render('crypto/catalog', { crypto });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

}

const getSearchPage = async (req, res) => {
    const { search, paymentMethod } = req.query;

    let crypto = [];

    try {
        if (!paymentMethod) {
            crypto = await cryptoManager.getCrypto().lean();
        } else {
            crypto = await cryptoManager.searchCrypto(search, paymentMethod).lean();
        }
        const paymentOptions = generatePaymentMethod(paymentMethod);
        res.render('crypto/search', { crypto, search, paymentOptions });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
}

const getCreatePage = (req, res) => {
    const paymentOptions = generatePaymentMethod();
    res.render('crypto/create', { paymentOptions });
}

const postCreate = async (req, res, next) => {
    const cryptoData = req.body;
    const user = req.user;
    cryptoData.owner = user._id;
    const paymentOptions = generatePaymentMethod();

    try {
        const crypto = await cryptoManager.createCrypto(cryptoData);
        res.redirect(`/crypto/${crypto._id}/details`);
    } catch (error) {
        console.log(error);
        const message = generateErrorMessage(error);
        res.render('crypto/create', { error: message, paymentOptions });
    }
}

const getDetailsPage = async (req, res) => {
    const { cryptoId } = req.params;
    const user = req.user;

    try {
        const crypto = await cryptoManager.getCryptoById(cryptoId).lean();

        crypto.isOwner = crypto.owner == user?._id;
        crypto.bought = crypto.buy
            .map(id => id.toString())
            .includes(user?._id);

        res.render('crypto/details', crypto);
    } catch (error) {
        res.render('404', { error: 'There is not such crypto' });
    }

}

const getEditPage = async (req, res) => {
    const { cryptoId } = req.params;
    const user = req.user;

    try {
        const crypto = await cryptoManager.getCryptoById(cryptoId).lean();
        if (crypto.owner != user._id) {
            return res.render('404', { error: 'You are not an owner of this coin!' });
        }
        const paymentOptions = generatePaymentMethod(crypto.paymentMethod);
        crypto.paymentOptions = paymentOptions;
        res.render('crypto/edit', crypto);
    } catch (error) {
        res.redirect('/404');
    }

}

const postEdit = async (req, res) => {
    const { cryptoId } = req.params;
    const cryptoData = req.body;

    try {
        const result = await cryptoManager.updateCrypto(cryptoId, cryptoData);
        res.redirect(`/crypto/${result._id}/details`);
    } catch (error) {
        console.log(error);
        const message = generateErrorMessage(error);

        const crypto = await cryptoManager.getCryptoById(cryptoId).lean();
        const paymentOptions = generatePaymentMethod(crypto.paymentMethod);
        crypto.paymentOptions = paymentOptions;

        res.render('crypto/edit', { error: message, ...crypto });
    }
}

const getDelete = async (req, res) => {
    const { cryptoId } = req.params;
    try {
        await cryptoManager.deleteCrypto(cryptoId);
        res.redirect('/crypto/browse');
    } catch (error) {
        res.redirect('/404');
    }
}

const getBuy = async (req, res) => {
    const { cryptoId } = req.params;
    const user = req.user;

    try {
        await cryptoManager.buyCrypto(cryptoId, user._id);
        res.redirect(`/crypto/${cryptoId}/details`);
    } catch (error) {
        console.log(error);
        res.render('404', { error });
    }
}

router.get('/browse', getCatalogPage);

router.get('/:cryptoId/details', getDetailsPage);

router.get('/search', privateGuard, getSearchPage);

router.get('/create', privateGuard, getCreatePage);
router.post('/create', privateGuard, postCreate);

router.get('/:cryptoId/edit', privateGuard, getEditPage);
router.post('/:cryptoId/edit', privateGuard, postEdit);

router.get('/:cryptoId/delete', privateGuard, getDelete);

router.get('/:cryptoId/buy', privateGuard, getBuy);

module.exports = router;