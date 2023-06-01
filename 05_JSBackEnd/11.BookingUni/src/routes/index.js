const router = require('express').Router();

const userController = require('../controllers/userController');
const hotelController = require('../controllers/hotelController');

router.use(userController);
router.use('/hotels', hotelController);

router.all('*', hotelController);

module.exports = router;