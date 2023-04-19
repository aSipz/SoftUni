const fs = require('fs/promises');
const path = require('path');
const uniqid = require('uniqid'); 

const db = require('../db.json');

class Cube {
    constructor({ name, description, imageUrl, difficultyLevel }) {
        this.id = uniqid(),
        this.name = name,
        this.imageUrl = imageUrl,
        this.difficultyLevel = difficultyLevel,
        this.description = description
    }

    static async save(cube) {
        db.cubes.push(cube);
        const result = JSON.stringify(db, null, 2);

        await fs.writeFile(path.resolve(__dirname, '../db.json'), result);
    }
}

module.exports = Cube;