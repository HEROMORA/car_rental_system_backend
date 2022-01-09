const getCarReservationsWithinPeriod = require('./getCarReservationsWithinPeriod');
const getReservationsWithinPeriod = require('./getReservationsWithinPeriod');
const getStatusOfAllCarsInDay = require('./getStatusOfAllCarsInDay');
const getCustomerReservations = require('./getCustomerReservations');

module.exports = {
  getReservationsWithinPeriod,
  getCarReservationsWithinPeriod,
  getStatusOfAllCarsInDay,
  getCustomerReservations,
};
