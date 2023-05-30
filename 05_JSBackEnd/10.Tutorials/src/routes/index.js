const router = require('express').Router();

const userController = require('../controllers/userController');
const courseController = require('../controllers/courseController');

router.use(userController);
router.use('/courses', courseController);

router.all('*', courseController);

module.exports = router;