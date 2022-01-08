const CarPrice = require('../../../models/car_price');
const AppError = require('../../../utils/appError');

const updateCarPrice = async (carPriceId, data) => {
  const carPrice = await CarPrice.findByPk(carPriceId);

  if (!carPrice) {
    throw new AppError('Car price could not be found', 404);
  }

  return carPrice.update(data);
};

module.exports = updateCarPrice;
