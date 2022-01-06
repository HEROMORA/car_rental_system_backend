const CarStatus = require('../../../models/car_status');
const AppError = require('../../../utils/appError');

const createCarStatus = async (carStatusData) => {
  const carStatus = await CarStatus.create({
    ...carStatusData,
  });

  if (!carStatus) {
    throw new AppError('Car status could not be created', 500);
  }

  return carStatus;
};

module.exports = createCarStatus;
