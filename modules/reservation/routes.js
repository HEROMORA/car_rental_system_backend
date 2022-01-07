const { Router } = require('express');
const reservationController = require('./reservationController');

const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const reservationRouter = Router();
const reservationController = new ReservationController();

reservationRouter
  .route('/')
  .post(reservationController.createReservation);

  reservationRouter.route('/:id').get(reservationController.getReservationTimes);

module.exports = reservationRouter;
