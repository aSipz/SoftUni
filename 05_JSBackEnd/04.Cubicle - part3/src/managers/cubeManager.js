const Cube = require('../models/Cube');

exports.getCubeById = (cubeId) => Cube.findById(cubeId);

exports.createCube = (cube) => Cube.create(cube);

exports.deleteCube = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.updateCube = (cubeId, cube) => Cube.findByIdAndUpdate(cubeId, cube, { runValidators: true });