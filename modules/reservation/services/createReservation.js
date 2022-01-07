const Car = require('../../../models/car');

const createReservation = async (body) => {
  const reservation = await reservation.create(body);

  return reservation;
};

module.exports = createReservation;
