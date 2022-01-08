const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');

const createCar = async (carData) => {
  const car = await Car.create({
    ...carData,
  });

  if (!car) {
    throw new AppError('Car could not be created', 500);
  }

  return car;
};

module.exports = createCar;
