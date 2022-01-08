const CarDescription = require('../../../models/car_description');
const AppError = require('../../../utils/appError');

const updateCarDescription = async (id, data) => {

  const carDescription = await CarDescription.findByPk(id);

  if (!carDescription) {
    throw new AppError('Car description could not be found', 404);
  }

  return carDescription.update(data);
};

module.exports = updateCarDescription;
