const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');
const CarPrice = require('../../../models/car_price');
const sequelize = require('../../../instances/sequelize');
const CarStatus = require('../../../models/car_status');

const createCar = async (carData) => {
  const t = await sequelize.transaction();
  try {
    const car = await Car.create(carData, { transaction: t });

    const carPrice = await CarPrice.create(
      {
        car_id: car.car_id,
        price_per_day: carData.price_per_day,
      },
      { transaction: t }
    );

    const carStatus = await CarStatus.create(
      {
        car_id: car.car_id,
        status: 'active',
      },
      { transaction: t }
    );

    await t.commit();

    return { car, carPrice, carStatus };
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

module.exports = createCar;
