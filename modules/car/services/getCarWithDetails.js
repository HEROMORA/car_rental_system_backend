const Car = require('../../../models/car');
const AppError = require('../../../utils/appError');
const CarDescription = require('../../../models/car_description');
const CarStatus = require('../../../models/car_status');
const { pick } = require('lodash');

const getCarWithDetails = async (query) => {

  const carDescriptionQuery = pick(query, [
    'model',
    'color',
    'year',
    'brand',
    'transmission',
    'type',
    'image',
  ]);

  const carStatusQuery = pick(query, [
    'status'
  ]);

 
  const inclusionArray = [
    {
          model: CarDescription,
          where: carDescriptionQuery,
          required: true,
    },
  ];

  const carQuery = pick(query, [
    'car_id',
    'plate_id'
  ]);


//  if(Object.keys(carStatusQuery).length){
    inclusionArray.push(
      {
        model: CarStatus,
        where: carStatusQuery,
        required: true,
      }
    )
 //}

  const car = await Car.findAll( {
    include: inclusionArray,
    where: !Object.keys(carQuery).length ?{}: carQuery
  });

  if (!car) {
    throw new AppError('Car not found', 404);
  }


  return car;
};

module.exports = getCarWithDetails;
