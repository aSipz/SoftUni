const router = require('express').Router();

const userManager = require('../managers/userManager');

const register = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const sameUserExists = await userManager.getUserByEmail(email);

        if (sameUserExists) {
            const error = new Error('This username or email is already taken!');
            error.statusCode = 409;
            throw error;
        }

        const result = await userManager.register(email, password);

        res.json(result);

    } catch (error) {
        console.log(error);
        next(error);
    }
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {

        const result = await userManager.login(email, password);

        res.json(result);

    } catch (error) {
        console.log(error);
        next(error);
    }
};

const logout = (req, res) => {
    res.json({ ok: true });
};

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;