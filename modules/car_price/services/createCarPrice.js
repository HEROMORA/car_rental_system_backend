const CarPrice = require('../../../models/car_price');
const AppError = require('../../../utils/appError');

const createCarPrice = async (carPriceData) => {
  const carPrice = await CarPrice.create({
    ...carPriceData,
  });

  if (!carPrice) {
    throw new AppError('Car price could not be created', 500);
  }

  return carPrice;
};

module.exports = createCarPrice;
