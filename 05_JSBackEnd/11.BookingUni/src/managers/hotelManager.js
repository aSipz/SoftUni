const Hotel = require('../models/Hotel');

exports.getHotelById = hotelId => Hotel.findById(hotelId);

exports.getAll = () => Hotel.find().sort({ 'free-rooms': -1 });

exports.checkIfExist = (hotel) => Hotel.findOne({ hotel: { $regex: new RegExp(hotel, 'i') } });

exports.createHotel = hotelData => Hotel.create(hotelData);

exports.updateHotel = (hotelId, hotelData) => Hotel.findByIdAndUpdate(hotelId, hotelData, { runValidators: true });

exports.deleteHotel = hotelId => Hotel.findByIdAndDelete(hotelId);

exports.bookHotel = async (hotelId, userId) => {
    const currentHotel = await this.getHotelById(hotelId);

    if (currentHotel.guests.map(id => id.toString()).includes(userId) || currentHotel.owner == userId) {
        throw new Error('Unauthorized operation');
    }

    currentHotel['free-rooms']--;
    currentHotel.guests.push(userId);
    await currentHotel.save();
};

exports.getBookedHotelsByUserId = userId => Hotel.find({ guests: { $in: userId } }).select('hotel');