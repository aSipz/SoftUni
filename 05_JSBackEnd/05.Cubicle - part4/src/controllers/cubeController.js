const cubeManager = require('../managers/cubeManager');

const { generateDifficultyLevel } = require('../utils/cubeUtils');

exports.getCreateCube = (req, res) => {
    res.render('cubes/create');
};

exports.postCreateCube = async (req, res, next) => {
    const user = req.user;

    const { name, description, difficultyLevel, imageUrl } = req.body;

    try {
        const savedCube = await cubeManager.createCube({ name, description, difficultyLevel, imageUrl, creatorId: user._id });
        res.redirect(`/cubes/${savedCube._id}/details`);
    } catch (error) {
        const message = Object.keys(error.errors).map(key => error.errors[key].message)[0];
        next(message);
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
        if (cube.creatorId != user._id) {
            throw new Error('You have no rights for this operation!')
        }
        cube.difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);
        res.render('cubes/edit', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

exports.postEditCube = async (req, res) => {
    const { name, description, difficultyLevel, imageUrl } = req.body;
    const { cubeId } = req.params;
    const user = req.user;

    try {
        await cubeManager.updateCube(cubeId, { name, description, difficultyLevel, imageUrl });
        res.redirect(`/cubes/${cubeId}/details`);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }


    // res.render('cubes/edit');
};

exports.getDeleteCube = async (req, res) => {
    const { cubeId } = req.params;
    const user = req.user;

    try {
        const cube = await cubeManager.getCubeById(cubeId).lean();
        if (cube.creatorId != user._id) {
            throw new Error('You have no rights for this operation!')
        }
        cube.difficultyLevel = generateDifficultyLevel(cube.difficultyLevel);
        res.render('cubes/delete', cube);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

exports.postDeleteCube = async (req, res) => {
    const { cubeId } = req.params;
    const user = req.user;
};