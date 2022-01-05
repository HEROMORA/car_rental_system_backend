const Car = require('../../../models/car');

const createCar = async (carData) => {
  const car = await Car.create({
    brand: carData.brand,
    color: carData.color,
  });

  return car;
};

module.exports = createCar;
