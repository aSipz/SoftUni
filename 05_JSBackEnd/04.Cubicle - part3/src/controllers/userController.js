const router = require('express').Router();

const userManager = require('../managers/userManager');

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
        return res.redirect('/404');
    }
};

const getRegisterPage = (req, res) => {
    res.render('user/register');
};

const postRegister = async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password != repeatPassword) {
        throw new Error("Passwords doesn't match");
    }

    try {
        const sameUserExists = await userManager.getUserByUsername(username);

        if (sameUserExists) {
            throw new Error("This username is taken!");
        }

        const token = await userManager.register(username, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/404');
    }

};

const logout = (req, res) => {

};

router.get('/login', getLoginPage);
router.post('/login', postLogin);

router.get('/register', getRegisterPage);
router.post('/register', postRegister);

router.get('/logout', logout);


module.exports = router;