const db = require('../db.json');

exports.getHomePage = (req, res) => {

    const { search, from, to } = req.query;

    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(c => Number(c.difficultyLevel) >= Number(from));
    }

    if (to) {
        cubes = cubes.filter(c => Number(c.difficultyLevel) <= Number(to));
    }

    res.render('index', { cubes: cubes, search: req.query });
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req, res) => {
    res.render('404');
}