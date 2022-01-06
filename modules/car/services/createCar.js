const Car = require('../../../models/car');

const createCar = async (carData) => {
  const car = await Car.create({
    car_id: carData.car_id,
    plate_id: carData.plate_id,
    car_description_id: carData.car_description_id,
  });

  return car;
};

module.exports = createCar;
