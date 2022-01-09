const AppError = require('../../../utils/appError');
const Car = require('../../../models/car');
const CarDescription = require('../../../models/car_description');
const { pick } = require('lodash');
const CarStatus = require('../../../models/car_status');
const CarPrice = require('../../../models/car_price');
const OfficeCar = require('../../../models/office_car');

const searchCarsWithDetails = async (query) => {

  const carDescriptionQuery = pick(query, [
    'model',
    'color',
    'year',
    'brand',
    'transmission',
    'type',
  ]);
  const carStatusQuery = pick(query, [
      'status'
  ]);
  
  const carPriceQuery = pick(query, [
    'price_per_day'
  ]);

  const carQuery = pick(query, [
    'plate_id',
    'car_id'
  ]);



  const cars = await Car.findAll({
    include:[
        {
          model: CarDescription,
          where: carDescriptionQuery,
          required: true,
        },
        {
          model: CarStatus,
          where: carStatusQuery,
          required: true,
        },
        {
          model: CarPrice,
          where: carPriceQuery,
          required: true,
        },
      ],
      where: carQuery
  });

  if (!cars) {
    throw new AppError('Cars could not be found', 404);
  }

  return cars;
};

module.exports = searchCarsWithDetails;
