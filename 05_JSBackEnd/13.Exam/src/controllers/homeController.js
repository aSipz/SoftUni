const animalManager = require('../managers/animalManager');

exports.getHomePage = async (req, res) => {
    try {
        const animals = await animalManager.getLastThree().lean();
        res.render('home', { animals });
    } catch (error) {
        console.log(error);
        res.redirect('/404');
    }
}

exports.get404 = (req, res) => {
    res.render('404');
}