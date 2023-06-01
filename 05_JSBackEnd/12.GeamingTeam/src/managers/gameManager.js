const Game = require('../models/Game');

exports.getGameById = gameId => Game.findById(gameId);

exports.getAll = () => Game.find();

exports.createGame = gameData => Game.create(gameData);

exports.updateGame = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData, { runValidators: true });

exports.deleteGame = gameId => Game.findByIdAndDelete(gameId);

exports.buyGame = async (gameId, buyerId) => {
    const currentGame = await this.getGameById(gameId);

    if (currentGame.boughtBy.map(id => id.toString()).includes(buyerId) || currentGame.owner == buyerId) {
        throw new Error('Unauthorized operation');
    }

    currentGame.boughtBy.push(buyerId);
    await currentGame.save();
};

exports.searchGame = (name, platform) => {
    const searchArray = [];

    if (platform) {
        searchArray.push({ platform });
    }

    if (name) {
        const pattern = new RegExp(name, 'i');
        searchArray.push({ name: { $regex: pattern } });
    }

    return Game.find({ $and: searchArray });
    // return Crypto.find({ $and: [{ name: { $regex: pattern } }, { paymentMethod: { $eq: platform } }] });
}