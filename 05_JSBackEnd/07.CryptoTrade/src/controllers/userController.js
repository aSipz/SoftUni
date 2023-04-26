const router = require('express').Router();

const userManager = require('../managers/userManager');
const { privateGuard, guestGuard } = require('../middlewares/authMiddleware');

const getLoginPage = (req, res) => {
    res.render('user/login');
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const token = await userManager.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/login', { error: error.message });
    }
};

const getRegisterPage = (req, res) => {
    res.render('user/register');
};

const postRegister = async (req, res) => {

    const { username, email, password, repeatPassword } = req.body;

    try {
        // const sameUserExists = await userManager.getUserByEmail(email);
        const sameUserExists = await userManager.checkIfExist(email, username);

        if (sameUserExists) {
            throw new Error("This username or email is already taken!");
        }

        if (password != repeatPassword) {
            throw new Error("Passwords doesn't match");
        }

        const token = await userManager.register(username, email, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/register', { error: error.message });
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