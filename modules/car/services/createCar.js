const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');
const CarPrice = require('../../../models/car_price');
const sequelize = require('../../../instances/sequelize');


const createCar = async (carData) => {
  const t = await sequelize.transaction();
  let car;
  let carPrice;
  try {
  car = await Car.create({
    ...carData,
  },
  { transaction: t });
  
  carPrice = await CarPrice.create({
    car_id : car.car_id,
    price_per_day: carData.price_per_day
  },
  { transaction: t });

  if (!car) {
    throw new AppError('Car could not be created', 500);
  }
  await t.commit();


  return {car,carPrice};
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

module.exports = createCar;
