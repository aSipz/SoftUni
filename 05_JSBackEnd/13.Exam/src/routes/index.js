const router = require('express').Router();

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const animalController = require('../controllers/animalController');

router.get('/', homeController.getHomePage);
router.get('/404', homeController.get404);

router.use(userController);
router.use('/animals', animalController);

router.all('*', homeController.get404);

module.exports = router;