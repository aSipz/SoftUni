const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');

const { privateGuard, guestGuard } = require('./middlewares/authMiddleware');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/cubes/create', privateGuard, cubeController.getCreateCube);
router.post('/cubes/create', privateGuard, cubeController.postCreateCube);

router.get('/cubes/:cubeId/edit', privateGuard, cubeController.getEditCube);
router.post('/cubes/:cubeId/edit', privateGuard, cubeController.postEditCube);
router.get('/cubes/:cubeId/delete', privateGuard, cubeController.getDeleteCube);
router.post('/cubes/:cubeId/delete', privateGuard, cubeController.postDeleteCube);

router.get('/cubes/:cubeId/details', cubeController.getDetailsCube);

router.use('/accessory', accessoryController);

router.use('/', userController);

router.all('*', homeController.getErrorPage);

module.exports = router;