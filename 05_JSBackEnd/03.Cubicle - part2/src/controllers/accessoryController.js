const router = require('express').Router();

const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

const createAccessoryPage = (req, res) => {
    res.render('createAccessory');
};

const createAccessory = async (req, res) => {
    try {
        await Accessory.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

const attachAccessoryPage = async (req, res) => {

    try {
        const [cube, accessories] = await Promise.all([
            Cube.findById(req.params.cubeId).lean(),
            Accessory.find().lean()
        ]);
        res.render('attachAccessory', { cube, accessories });
    } catch (error) {
        console.log(error);
    }
};

const attachAccessory = async (req, res) => {
    const accessoryId = req.body.accessory;
    try {
        const [cube, accessory] = await Promise.all([
            Cube.findById(req.params.cubeId),
            Accessory.findById(accessoryId)
        ]);

        cube.accessories.push(accessoryId);
        accessory.cubes.push(cube._id);
        await Promise.all([
            cube.save(),
            accessory.save()
        ]);

        res.redirect(`/details/${cube._id}`);
    } catch (error) {
        console.log(error);
    }
};

router.get('/create', createAccessoryPage);
router.post('/create', createAccessory);

router.get('/attach/:cubeId', attachAccessoryPage);
router.post('/attach/:cubeId', attachAccessory);

module.exports = router;