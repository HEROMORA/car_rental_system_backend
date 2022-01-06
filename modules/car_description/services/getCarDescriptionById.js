const CarDescription = require('../../../models/car_description');
const AppError = require('../../../utils/appError');

const getCarDescriptionById = async (id) => {
  const carDescription = await CarDescription.findByPk(id);

  if (!carDescription) {
    throw new AppError(`No car description with id ${id} is found`, 404);
  }

  return carDescription;
};

module.exports = getCarDescriptionById;
