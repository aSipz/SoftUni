const router = require('express').Router();

const animalManager = require('../managers/animalManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getDashboardPage = async (req, res) => {

    try {
        const animals = await animalManager.getAll().lean();
        res.render('animals/dashboard', { animals });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

};

const getCreatePage = (req, res) => {
    res.render('animals/create');
};

const postCreate = async (req, res, next) => {
    const animalData = req.body;
    const user = req.user;
    animalData.owner = user._id;

    for (const key in animalData) {
        animalData[key] = animalData[key].trim();
    }

    try {
        const animal = await animalManager.createAnimal(animalData);
        res.redirect(`/animals/dashboard`);
    } catch (error) {
        console.log(error);
        res.render('animals/create', { error: getErrorMessage(error), ...animalData });
    }
};

const getDetailsPage = async (req, res) => {
    const { animalId } = req.params;
    const user = req.user;

    try {
        const animal = await animalManager.getAnimalById(animalId).lean();

        animal.isOwner = animal.owner == user?._id;
        animal.donated = animal.donations
            .map(id => id.toString())
            .includes(user?._id);

        res.render('animals/details', animal);
    } catch (error) {
        console.log(error);
        res.render('404', { error: 'There is not such animal' });
    }

};

const getEditPage = async (req, res) => {
    const { animalId } = req.params;
    const user = req.user;

    try {
        const animal = await animalManager.getAnimalById(animalId).lean();
        if (animal.owner != user._id) {
            throw new Error('You are not an owner of this post!');
        }
        res.render('animals/edit', animal);
    } catch (error) {
        res.redirect('/404');
    }

};

const postEdit = async (req, res) => {
    const { animalId } = req.params;
    const animalData = req.body;

    for (const key in animalData) {
        animalData[key] = animalData[key].trim();
    }

    try {
        const result = await animalManager.updateAnimal(animalId, animalData);
        res.redirect(`/animals/${result._id}/details`);
    } catch (error) {
        console.log(error);
        res.render('animals/edit', { error: getErrorMessage(error), ...animalData });
    }
};

const getDelete = async (req, res) => {
    const { animalId } = req.params;
    try {
        await animalManager.deleteAnimal(animalId);
        res.redirect('/animals/dashboard');
    } catch (error) {
        res.redirect('/404');
    }
};

const donate = async (req, res) => {
    const { animalId } = req.params;
    const user = req.user;

    try {
        await animalManager.donate(animalId, user._id);
        res.redirect(`/animals/${animalId}/details`);
    } catch (error) {
        console.log(error);
        res.render('404', { error: getErrorMessage(error) });
    }
};

const getSearchPage = async (req, res) => {
    const { location } = req.query;

    let animals = [];

    try {
        if (!location) {
            animals = await animalManager.getAll().lean();
        } else {
            animals = await animalManager.searchAnimal(location).lean();
        }
        res.render('animals/search', { animals, location });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
};

router.get('/dashboard', getDashboardPage);

router.get('/:animalId/details', getDetailsPage);

router.get('/create', privateGuard, getCreatePage);
router.post('/create', privateGuard, postCreate);

router.get('/:animalId/edit', privateGuard, getEditPage);
router.post('/:animalId/edit', privateGuard, postEdit);

router.get('/:animalId/delete', privateGuard, getDelete);

router.get('/:animalId/donate', privateGuard, donate);

router.get('/search', getSearchPage);

module.exports = router;