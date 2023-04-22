const cubeManager = require('../managers/cubeManager');

const { generateDifficultyLevel } = require('../utils/cubeUtils');

exports.getCreateCube = (req, res) => {
    res.render('cubes/create');
};

exports.postCreateCube = async (req, res) => {
    const user = req.user;

    const { name, description, difficultyLevel, imageUrl } = req.body;

    try {
        const savedCube = await cubeManager.createCube({ name, description, difficultyLevel, imageUrl, creatorId: user._id });
        res.redirect(`/cubes/${savedCube._id}/details`);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }

};

exports.getDetailsCube = async (req, res) => {
    const { cubeId } = req.params;
    const user = req.user;

    try {
        const cube = await cubeManager.getCubeById(cubeId).populate('accessories').lean();
        cube.isOwner = user?._id == cube.creatorId;
        res.render('cubes/details', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }

};

exports.getEditCube = async (req, res) => {
    const { cubeId } = req.params;
    const user = req.user;

    try {
        const cube = await cubeManager.getCubeById(cubeId).lean();
        cube.difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);
        res.render('cubes/edit', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

exports.postEditCube = (req, res) => {
    // res.render('cubes/edit');
};

exports.getDeleteCube = async (req, res) => {
    const { cubeId } = req.params;
    const user = req.user;

    try {
        const cube = await cubeManager.getCubeById(cubeId).lean();
        cube.difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);
        res.render('cubes/delete', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};