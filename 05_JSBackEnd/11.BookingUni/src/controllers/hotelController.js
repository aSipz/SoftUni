const router = require('express').Router();

const hotelManager = require('../managers/hotelManager');
// const userManager = require('../managers/userManager');
const { privateGuard } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

const getHomePage = async (req, res) => {

    try {
        const hotels = await hotelManager.getAll().lean();
        res.render('hotels/home', { hotels });
    } catch (error) {
        console.log(error);
    }

}

const getCreatePage = (req, res) => {
    res.render('hotels/create');
}

const postCreate = async (req, res, next) => {
    const hotelData = req.body;
    const user = req.user;
    hotelData.owner = user._id;
    for (const key in hotelData) {
        hotelData[key] = hotelData[key].trim();
    }

    const sameHotelExists = await hotelManager.checkIfExist(hotelData.hotel);

    try {
        if (sameHotelExists) {
            throw new Error("There is already a hotel with this name!");
        }

        const hotel = await hotelManager.createHotel(hotelData);
        // await userManager.addToOffered(user._id, hotel._id);
        res.redirect(`/`);
    } catch (error) {
        console.log(error);
        res.render('hotels/create', { error: getErrorMessage(error), ...hotelData });
    }
}

const getDetailsPage = async (req, res) => {
    const { hotelId } = req.params;
    const user = req.user;

    if (!user) {
        return res.redirect('/login');
    }

    try {
        const hotel = await hotelManager.getHotelById(hotelId).lean();

        hotel.isOwner = hotel.owner == user?._id;
        hotel.booked = hotel.guests
            .map(id => id.toString())
            .includes(user?._id);

        res.render('hotels/details', hotel);
    } catch (error) {
        console.log(error);
    }

}

const getEditPage = async (req, res) => {
    const { hotelId } = req.params;
    const user = req.user;

    try {
        const hotel = await hotelManager.getHotelById(hotelId).lean();
        if (hotel.owner != user._id) {
            throw new Error('You are not an owner of this hotel!');
        }
        res.render('hotels/edit', hotel);
    } catch (error) {
        console.log(error);
    }

}

const postEdit = async (req, res) => {
    const { hotelId } = req.params;
    const hotelData = req.body;
    const user = req.user;

    for (const key in hotelData) {
        hotelData[key] = hotelData[key].trim();
    }

    try {
        const hotel = await hotelManager.getHotelById(hotelId).lean();
        if (hotel.owner != user._id) {
            throw new Error('You are not an owner of this hotel!');
        }
        const result = await hotelManager.updateHotel(hotelId, hotelData);
        res.redirect(`/hotels/${result._id}/details`);
    } catch (error) {
        console.log(error);
        res.render('hotels/edit', { error: getErrorMessage(error), ...hotelData });
    }
}

const getDelete = async (req, res) => {
    const { hotelId } = req.params;
    const user = req.user;
    try {
        const hotel = await hotelManager.getHotelById(hotelId).lean();
        if (hotel.owner != user._id) {
            throw new Error('You are not an owner of this hotel!');
        }
        await hotelManager.deleteHotel(hotelId);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const book = async (req, res) => {
    const { hotelId } = req.params;
    const user = req.user;

    try {
        await hotelManager.bookHotel(hotelId, user._id);
        // await userManager.addToBooked(user._id, hotelId);
        res.redirect(`/hotels/${hotelId}/details`);
    } catch (error) {
        console.log(error);
    }
}

const get404 = (req, res) => {
    res.redirect('/hotels');
}

router.get('/', getHomePage);

router.get('/:hotelId/details', getDetailsPage);

router.get('/create', privateGuard, getCreatePage);
router.post('/create', privateGuard, postCreate);

router.get('/:hotelId/edit', privateGuard, getEditPage);
router.post('/:hotelId/edit', privateGuard, postEdit);

router.get('/:hotelId/delete', privateGuard, getDelete);

router.get('/:hotelId/book', privateGuard, book);

router.all('*', get404);

module.exports = router;