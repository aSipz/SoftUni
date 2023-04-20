const Accessory = require('../models/Accessory');

exports.getCreateAccessory = (req, res) => {
    res.render('createAccessory');
}

exports.postCreateAccessory = async (req, res) => {
    try {
        await Accessory.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}