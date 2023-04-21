const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const jwt = require('../auth/token');

const saltRounds = 3;

const getLoginPage = (req, res) => {
    res.render('user/login');
};

const postLogin = (req, res) => {

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
        const users = await User.find().select('username');
        const exists = users.some(u => u.username == username);

        if (exists) {
            throw new Error('Username already taken');
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        await User.create({ username, password: hash });

        const token = jwt.encodeToken({ username });

        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.log(error);
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