const CarDescription = require('../../../models/car_description');

const getCarDescriptions = async () => {
  const car_descriptions = await CarDescription.findAll();

  return car_descriptions;
};

module.exports = getCarDescriptions;
