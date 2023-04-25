const Crypto = require('../models/Crypto');

exports.getCryptoById = cryptoId => Crypto.findById(cryptoId);

exports.getCrypto = () => Crypto.find();

exports.createCrypto = cryptoData => Crypto.create(cryptoData);

exports.updateCrypto = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData, { runValidators: true });

exports.deleteCrypto = cryptoId => Crypto.findByIdAndDelete(cryptoId);

exports.buyCrypto = async (cryptoId, buyerId) => {
    const currentCrypto = await this.getCryptoById(cryptoId);

    if (currentCrypto.buy.map(id => id.toString()).includes(buyerId) || currentCrypto.owner == buyerId) {
        throw new Error('Unauthorized operation');
    }

    currentCrypto.buy.push(buyerId);
    await currentCrypto.save();
};

exports.searchCrypto = (search, paymentMethod) => {
    const pattern = search ? new RegExp(search, 'i') : /.*/i;
    return Crypto.find({ $and: [{ name: { $regex: pattern } }, { paymentMethod: { $eq: paymentMethod } }] });
}