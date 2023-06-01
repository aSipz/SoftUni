const router = require('express').Router();

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');

router.get('/', homeController.getHomePage);
router.get('/404', homeController.get404);

router.use(userController);
router.use('/games', gameController);

router.all('*', homeController.get404);


module.exports = router;