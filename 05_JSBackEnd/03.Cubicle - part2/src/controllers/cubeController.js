const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    try {
        const savedCube = await Cube.create(req.body);
        res.redirect(`/details/${savedCube._id}`);
    } catch (error) {
        console.log(error);
    }

};

exports.getDetailsCube = async (req, res) => {
    const { cubeId } = req.params;

    try {
        const cube = await Cube.findById(cubeId).populate('accessories').lean();
        console.log(cube);
        res.render('details', cube);
    } catch (error) {
        res.redirect('/not-found');
    }

}