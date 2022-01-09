const Pickup = require('../../../models/pickup');
const Reservation = require('../../../models/reservation');

const { pick } = require('lodash');
const Customer = require('../../../models/customer');
const CarStatus = require('../../../models/car_status');
const Payment = require('../../../models/payment');
const Car = require('../../../models/car');
const { Op } = require('sequelize');

const getReservationsWithinPeriod = async (query) => {
  
  const defaultWhere = {
    return_date: {
      [Op.lte]: query.return_date,
    },
  };

  if (query.res_date) {
    defaultWhere.res_date = {
      [Op.gte]: query.res_date,
    };
  }

  const reservations = await Reservation.findAll({
    where: defaultWhere,
    include: [
      {
        model: Pickup,
        where: { pickup_date: { [Op.gte]: query.pickup_date } },
        required: true,
      },
      {
        model: Payment,
        required: true,
      },
      {
        model: Customer,
        required: true,
      },
      {
        model: Car,
        required: true,
        include: {
          model: CarStatus,
          required: true,
        },
      },
    ],
  });

  return reservations;
};

module.exports = getReservationsWithinPeriod;
