const router = require('express').Router();

const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

const createAccessoryPage = (req, res) => {
    res.render('accessories/create');
};

const createAccessory = async (req, res) => {
    try {
        await Accessory.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

const attachAccessoryPage = async (req, res) => {

    try {
        const cube = await Cube
            .findById(req.params.cubeId)
            .lean();
        const accessories = await Accessory
            .find({ _id: { $nin: cube.accessories } })
            .select('name')
            .lean();
        res.render('accessories/attach', { cube, accessories });
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

const attachAccessory = async (req, res) => {
    const accessoryId = req.body.accessory;
    try {
        const [cube, accessory] = await Promise.all([
            Cube.findById(req.params.cubeId),
            Accessory.findById(accessoryId)
        ]);

        if (!cube.accessories.includes(accessoryId) && !accessory.cubes.includes(cube._id)) {
            cube.accessories.push(accessoryId);
            accessory.cubes.push(cube._id);
            await Promise.all([
                cube.save(),
                accessory.save()
            ]);
        }

        res.redirect(`/cubes/${cube._id}/details`);
    } catch (error) {
        console.log(error);
        res.redirect('/not-found');
    }
};

router.get('/create', createAccessoryPage);
router.post('/create', createAccessory);

router.get('/attach/:cubeId', attachAccessoryPage);
router.post('/attach/:cubeId', attachAccessory);

module.exports = router;