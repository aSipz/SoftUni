const cryptoManager = require('../managers/cryptoManager');

exports.getHomePage = async (req, res) => {
    try {
        const crypto = await cryptoManager.getThree().lean();
        res.render('home', { crypto });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }

}

exports.get404 = (req, res) => {
    res.render('404');
}