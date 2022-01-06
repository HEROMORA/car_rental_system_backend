const CarPrice = require('../../../models/car_price');
const AppError = require('../../../utils/appError');

const getCarPrice = async (carPriceId) => {
  const carPrice = await CarPrice.findByPk(carPriceId);

  if (!carPrice) {
    throw new AppError('Car price could not be found', 404);
  }

  return carPrice;
};

module.exports = getCarPrice;
