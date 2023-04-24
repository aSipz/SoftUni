const jwt = require('../utils/jwt');

exports.authentication = async (req, res, next) => {
    const token = req.cookies('auth');

    if (token) {
        try {
            const decodedToken = await jwt.verifyToken(token);
            req.user = decodedToken;
            res.locals.user = decodedToken.username;
            res.locals.isUser = true;
        } catch (error) {
            console.log(error);
            res.clearCookie('auth');
            return res.redirect('/not-found');
        }
    }

    next();
};

exports.privateGuard = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/login');
    }

    next();
};

exports.guestGuard = (req, res, next) => {

    if (req.user) {
        return res.redirect('/');
    }

    next();
};