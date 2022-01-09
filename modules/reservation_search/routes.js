const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const searchReservationController = require('./reservationSearchController');

const searchReservationRouter = Router();
const SearchReservationController = new searchReservationController();

searchReservationRouter.get('/', auth, role(['admin']), SearchReservationController.searchReservation);

module.exports = searchReservationRouter;
