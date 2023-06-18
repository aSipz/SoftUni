const Animal = require('../models/Animal');

exports.getAnimalById = animalId => Animal.findById(animalId);

exports.getAll = () => Animal.find();

exports.getLastThree = () => Animal.find().sort('-createdAt').limit(3);

exports.createAnimal = animalData => Animal.create(animalData);

exports.updateAnimal = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData, { runValidators: true });

exports.deleteAnimal = animalId => Animal.findByIdAndDelete(animalId);

exports.donate = async (animalId, donatorId) => {
    const currentAnimal = await this.getAnimalById(animalId);

    if (currentAnimal.donations.map(id => id.toString()).includes(donatorId) || currentAnimal.owner == donatorId) {
        throw new Error('Unauthorized operation');
    }

    currentAnimal.donations.push(donatorId);
    await currentAnimal.save();
};

exports.searchAnimal = location => Animal.find({ location: { $regex: new RegExp(location, 'i') } });
