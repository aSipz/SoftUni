const mongoose = require('mongoose');
const { Schema } = mongoose;

const { httpVal } = require('./validators');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: httpVal },
    description: { type: String, required: true, maxLength: 200 },
    cubes: [{ type: Schema.Types.ObjectId, ref: 'Cube' }]
});

module.exports = mongoose.model('Accessory', accessorySchema);