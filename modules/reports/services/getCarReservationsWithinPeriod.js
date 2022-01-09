const Reservation = require('../../../models/reservation');
const Payment = require('../../../models/payment');
const Car = require('../../../models/car');
const CarDescription = require('../../../models/car_description');
const Pickup = require('../../../models/pickup');

const { Op } = require('sequelize');

const getCarReservationsWithinPeriod = async (car_id, query) => {
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
    where: {
      car_id: car_id,
      ...defaultWhere,
    },
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
        model: Car,
        required: true,
        include: [
          {
            model: CarDescription,
            required: true,
          },
        ],
      },
    ],
  });

  return reservations;
};

module.exports = getCarReservationsWithinPeriod;
