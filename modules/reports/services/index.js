const getCarReservationsWithinPeriod = require('./getCarReservationsWithinPeriod');
const getReservationsWithinPeriod = require('./getReservationsWithinPeriod');
const getStatusOfAllCarsInDay = require('./getStatusOfAllCarsInDay');
const getCustomerReservations = require('./getCustomerReservations');
const getDailyPaymentsWithinPeriod = require('./getDailyPaymentsWithinPeriod');

module.exports = {
  getReservationsWithinPeriod,
  getCarReservationsWithinPeriod,
  getStatusOfAllCarsInDay,
  getCustomerReservations,
  getDailyPaymentsWithinPeriod,
};
