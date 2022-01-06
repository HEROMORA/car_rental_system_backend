const CarStatus = require('../../../models/car_status');
const AppError = require('../../../utils/appError');

const updateCarStatus = async (carStatusId, carStatusData) => {
  const carStatus = await CarStatus.findByPk(carStatusId);

  if (!carStatus) {
    throw new AppError('Car status could not be found', 404);
  }

  const updatedCarStatus = await carStatus.update(carStatusData);

  return updatedCarStatus;
};

module.exports = updateCarStatus;
