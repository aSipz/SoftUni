const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    const user = req.user;

    if (!user) {
        return res.redirect('/');
    }

    res.render('cubes/create');
};

exports.postCreateCube = async (req, res) => {
    const user = req.user;

    if (!user) {
        return res.redirect('/');
    }

    const { name, description, difficultyLevel, imageUrl } = req.body;

    try {
        const savedCube = await Cube.create({ name, description, difficultyLevel, imageUrl, creatorId: user._id });
        res.redirect(`/details/${savedCube._id}`);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }

};

exports.getDetailsCube = async (req, res) => {
    const { cubeId } = req.params;

    try {
        const cube = await Cube.findById(cubeId).populate('accessories').lean();
        res.render('cubes/details', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }

};