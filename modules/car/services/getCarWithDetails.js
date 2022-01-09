const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');
const CarDescription = require('../../../models/car_description');

const getCarWithDetails = async (carId) => {
  const car = await Car.findByPk(carId, {
    include: CarDescription,
  });

  if (!car) {
    throw new AppError('Car not found', 404);
  }

  return car;
};

module.exports = getCarWithDetails;
