const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    try {
        await Cube.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

};

exports.getDetailsCube = async (req, res) => {
    const { cubeId } = req.params;

    try {
        const [cube, accessories] = await Promise.all([
            Cube.findById(cubeId),
            Accessory.find().lean()
        ]);
        console.log(accessories);
        res.render('details', { cube, accessories });
    } catch (error) {
        res.redirect('/not-found');
    }

}