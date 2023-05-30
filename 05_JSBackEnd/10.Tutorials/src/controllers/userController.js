const router = require('express').Router();

const userManager = require('../managers/userManager');
const { privateGuard, guestGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getLoginPage = (req, res) => {
    res.render('user/login');
};

const postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {

        const token = await userManager.login(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/login', { error: getErrorMessage(error) });
    }
};

const getRegisterPage = (req, res) => {
    res.render('user/register');
};

const postRegister = async (req, res) => {

    const { username, password, rePassword } = req.body;

    try {
        const sameUserExists = await userManager.getUserByUsername(username);

        if (sameUserExists) {
            throw new Error("This username or email is already taken!");
        }

        if (password != rePassword) {
            throw new Error("Passwords doesn't match");
        }

        const token = await userManager.register(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/register', { error: getErrorMessage(error), user: req.body });
    }

};

const logout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
};

router.get('/login', guestGuard, getLoginPage);
router.post('/login', guestGuard, postLogin);

router.get('/register', guestGuard, getRegisterPage);
router.post('/register', guestGuard, postRegister);

router.get('/logout', privateGuard, logout);

module.exports = router;