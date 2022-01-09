const Car = require('../../../models/car');
const Pickup = require('../../../models/pickup');
const Reservation = require('../../../models/reservation');

const { Op } = require('sequelize');

const getStatusOfAllCarsInDay = async (date) => {
  const cars = await Car.findAll({
    include: {
      model: Reservation,
      required: false,
      where: {
        [Op.and]: [
          {
            return_date: {
              [Op.gte]: date,
            },
          },
          {
            '$reservation.pickup.pickup_date$': {
              [Op.lte]: date,
            },
          },
        ],
      },
      include: {
        model: Pickup,
        required: true,
        attributes: ['pickup_date'],
      },
    },
  });

  const carsData = cars.map((car) => {
    return {
      car_id: car.car_id,
      status: car.Reservation ? 'reserved' : 'free',
    };
  });

  return carsData;
};

module.exports = getStatusOfAllCarsInDay;
