const router = require('express').Router();

const userManager = require('../managers/userManager');
const hotelManager = require('../managers/hotelManager');
const { privateGuard, guestGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getLoginPage = (req, res) => {
    res.render('user/login');
};

const postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {

        const token = await userManager.login(username.trim().toLowerCase(), password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/login', { error: getErrorMessage(error), username });
    }
};

const getRegisterPage = (req, res) => {
    res.render('user/register');
};

const postRegister = async (req, res) => {

    const { username, email, password, rePassword } = req.body;

    try {


        const sameUserExists = await userManager.checkIfExist(email.trim().toLowerCase(), username.trim().toLowerCase());

        if (sameUserExists) {
            throw new Error("This username or email is already taken!");
        }

        if (password != rePassword) {
            throw new Error("Passwords doesn't match");
        }

        const token = await userManager.register(username.trim().toLowerCase(), email.trim().toLowerCase(), password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/register', { error: getErrorMessage(error), username, email });
    }

};

const logout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};

const profile = async (req, res) => {
    const user = req.user;

    try {
        const hotels = (await hotelManager.getBookedHotelsByUserId(user._id)).map(h => h.hotel);
        res.render('user/profile', { user, hotels });
    } catch (error) {
        console.log(error);
        res.render('404', { error: getErrorMessage(error) });
    }

}

router.get('/login', guestGuard, getLoginPage);
router.post('/login', guestGuard, postLogin);

router.get('/register', guestGuard, getRegisterPage);
router.post('/register', guestGuard, postRegister);

router.get('/logout', privateGuard, logout);

router.get('/profile', privateGuard, profile);


module.exports = router;