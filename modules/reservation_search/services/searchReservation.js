const Reservation = require('../../../models/reservation');
const { pick } = require('lodash');

const searchReservation = async (query) => {
  const reservationQuery = pick(query, [
    'res_id',
    'car_id',
    'customer_id',
    'res_date',
    'return_date',
  ]);

  const reservation = await Reservation.findAll({ where: reservationQuery });
  return reservation;
};

module.exports = searchReservation;
