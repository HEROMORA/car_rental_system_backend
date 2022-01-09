const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');
const Customer = require('../../../models/customer');
const Car = require('../../../models/car');
const CarDescription = require('../../../models/car_description');
const Office = require('../../../models/office');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { pick } = require('lodash');
const CarStatus = require('../../../models/car_status');

const getOfficeCarsWithDetails = async (customerId, query) => {
  let address;
  if (!query.office_id) {
    const customer = await Customer.findByPk(customerId);
    let details = customer.address.split(/(?:,| )+/);
    address = details[details.length - 2] + ', ' + details[details.length - 1];
  }

  const carDescriptionQuery = pick(query, [
    'model',
    'color',
    'year',
    'brand',
    'transmission',
    'type',
  ]);

  const inclusionArray = [
    {
      model: Car,
      include: [
        {
          model: CarDescription,
          where: carDescriptionQuery,
          required: true,
        },
        {
          model: CarStatus,
          where: { status: 'active' },
          required: true,
        },
      ],
      required: true,
    },
  ];

  if (!query.office_id) {
    inclusionArray.push({
      model: Office,
      where: {
        address: {
          [Op.like]: '%' + address,
        },
      },
    });
  }

  const officeCars = await OfficeCar.findAll({
    where: !query.office_id
      ? {}
      : {
          office_id: query.office_id,
        },
    include: inclusionArray,
  });

  if (!officeCars) {
    throw new AppError('Office cars could not be found', 404);
  }

  return officeCars;
};

module.exports = getOfficeCarsWithDetails;
