const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');

const { isAuthenticated } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/create', isAuthenticated, cubeController.getCreateCube);
router.post('/create', isAuthenticated, cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetailsCube);

router.use('/accessory', accessoryController);

router.use('/', userController);

router.all('*', homeController.getErrorPage);

module.exports = router;