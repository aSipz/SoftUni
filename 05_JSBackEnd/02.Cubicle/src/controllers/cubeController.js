const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {

    let cube = new Cube(req.body);

    Cube.save(cube);

    res.redirect('/');
};

exports.getDetailsCube = (req, res) => {
    const { cubeId } = req.params;

    const cube = db.cubes.find(c => c.id == cubeId);

    if (!cube) {
        return res.redirect('/not-found');
    }

    res.render('details', cube);
}