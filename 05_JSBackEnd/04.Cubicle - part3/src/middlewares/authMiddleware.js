const jwt = require('../utils/jwt');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verifyToken(token);
            req.user = decodedToken;
        } catch (error) {
            console.log(error);
            res.clearCookie('auth');
            return res.redirect('/not-found');
        }
    }

    next();
};

exports.isAuthenticated = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/');
    }

    next();
};