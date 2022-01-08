const CarDescription = require('../../../models/car_description');

const createCarDescription = async (carDescriptionData) => {
  const carDescription = await CarDescription.create({ ...carDescriptionData });

  return carDescription;
};

module.exports = createCarDescription;
