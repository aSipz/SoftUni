const router = require('express').Router();

const getLoginPage = (req, res) => {
    res.render('user/login');
};

const postLogin = (req, res) => {

};

const getRegisterPage = (req, res) => {
    res.render('user/register');
};

const postRegister = (req, res) => {

};

const logout = (req, res) => {

};

router.get('/login', getLoginPage);
router.post('/login', postLogin);

router.get('/register', getRegisterPage);
router.post('/register', postRegister);

router.get('/logout', logout);


module.exports = router;