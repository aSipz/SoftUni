const router = require('express').Router();

const gameManager = require('../managers/gameManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { generatePlatformOptions } = require('../utils/gameUtils');
const { getErrorMessage } = require('../utils/errorUtils');

const getCatalogPage = async (req, res) => {

    try {
        const games = await gameManager.getAll().lean();
        res.render('games/catalog', { games });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

};

const getCreatePage = (req, res) => {
    const platformOptions = generatePlatformOptions();

    res.render('games/create', { platformOptions });
};

const postCreate = async (req, res, next) => {
    const gameData = req.body;
    const user = req.user;
    gameData.owner = user._id;

    for (const key in gameData) {
        gameData[key] = gameData[key].trim();
    }

    try {
        const game = await gameManager.createGame(gameData);
        res.redirect(`/games/catalog`);
    } catch (error) {
        console.log(error);
        const platformOptions = generatePlatformOptions(gameData.platform);
        res.render('games/create', { error: getErrorMessage(error), ...gameData, platformOptions });
    }
};

const getDetailsPage = async (req, res) => {
    const { gameId } = req.params;
    const user = req.user;

    try {
        const game = await gameManager.getGameById(gameId).lean();

        game.isOwner = game.owner == user?._id;
        game.bought = game.boughtBy
            .map(id => id.toString())
            .includes(user?._id);

        res.render('games/details', game);
    } catch (error) {
        console.log(error);
        res.render('404', { error: 'There is not such game' });
    }

};

const getEditPage = async (req, res) => {
    const { gameId } = req.params;
    const user = req.user;

    try {
        const game = await gameManager.getGameById(gameId).lean();
        if (game.owner != user._id) {
            throw new Error('You are not an owner of this game!');
        }
        const platformOptions = generatePlatformOptions(game.platform);
        res.render('games/edit', { ...game, platformOptions });
    } catch (error) {
        res.redirect('/404');
    }

};

const postEdit = async (req, res) => {
    const { gameId } = req.params;
    const gameData = req.body;

    for (const key in gameData) {
        gameData[key] = gameData[key].trim();
    }

    try {
        const result = await gameManager.updateGame(gameId, gameData);
        res.redirect(`/games/${result._id}/details`);
    } catch (error) {
        console.log(error);
        const platformOptions = generatePlatformOptions(gameData.platform);
        res.render('games/edit', { error: getErrorMessage(error), ...gameData, platformOptions });
    }
};

const getDelete = async (req, res) => {
    const { gameId } = req.params;
    try {
        await gameManager.deleteGame(gameId);
        res.redirect('/games/catalog');
    } catch (error) {
        res.redirect('/404');
    }
};

const buyGame = async (req, res) => {
    const { gameId } = req.params;
    const user = req.user;

    try {
        await gameManager.buyGame(gameId, user._id);
        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        console.log(error);
        res.render('404', { error: getErrorMessage(error) });
    }
};

const getSearchPage = async (req, res) => {
    const { name, platform } = req.query;

    let games = [];

    try {
        if (!name && !platform) {
            games = await gameManager.getAll().lean();
        } else {
            games = await gameManager.searchGame(name, platform).lean();
        }
        const platformOptions = generatePlatformOptions(platform);
        res.render('games/search', { games, name, platformOptions });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
};

router.get('/catalog', getCatalogPage);

router.get('/:gameId/details', getDetailsPage);

router.get('/create', privateGuard, getCreatePage);
router.post('/create', privateGuard, postCreate);

router.get('/:gameId/edit', privateGuard, getEditPage);
router.post('/:gameId/edit', privateGuard, postEdit);

router.get('/:gameId/delete', privateGuard, getDelete);

router.get('/:gameId/buy', privateGuard, buyGame);

router.get('/search', privateGuard, getSearchPage);

module.exports = router;