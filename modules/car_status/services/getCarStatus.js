const CarStatus = require('../../../models/car_status');
const AppError = require('../../../utils/appError');

const getCarStatus = async (carStatusId) => {
  const carStatus = await CarStatus.findByPk(carStatusId);

  if (!carStatus) {
    throw new AppError('Car status could not be found', 404);
  }

  return carStatus;
};

module.exports = getCarStatus;
