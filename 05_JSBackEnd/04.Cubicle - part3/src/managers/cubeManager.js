const Cube = require('../models/Cube');

exports.getCubeById = (cubeId) => Cube.findById(cubeId);

exports.createCube = (cube) =>  Cube.create(cube);