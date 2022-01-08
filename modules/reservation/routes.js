const { Router } = require('express');
const ReservationController = require('./reservationController');

const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const reservationRouter = Router();
const reservationController = new ReservationController();

reservationRouter
  .route('/')
  .post(auth,role(["customer"]),reservationController.createReservation);

  reservationRouter.route('/car/:carid').get(reservationController.getReservationTimes);

module.exports = reservationRouter;
