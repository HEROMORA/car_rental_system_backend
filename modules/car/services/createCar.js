const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');

const createCar = async (carData) => {
  try {
    const car = await Car.create({
      brand: carData.brand,
      color: carData.color,
    });

    return car;
  } catch (err) {
    console.log(err);
    throw new AppError(err, 400);
  }
};

module.exports = createCar;
