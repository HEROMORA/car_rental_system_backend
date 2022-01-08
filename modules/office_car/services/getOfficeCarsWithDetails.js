const OfficeCar = require('../../../models/office_car');
const AppError = require('../../../utils/appError');
const Customer = require('../../../models/customer');
const Car = require('../../../models/car');
const CarDescription = require('../../../models/car_description');
const Office = require('../../../models/office');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getOfficeCarsWithDetails = async (customerId, query) => {
  let address;
  if (!query.office_id) {
    const customer = await Customer.findByPk(customerId);
    let details = customer.address.split(/,| /);
    address = details[details.length - 2] + ', ' + details[details.length - 1];
  }

  const inclusionArray = [
    {
      model: Car,
      include: [
        {
          model: CarDescription,
        },
      ],
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
          ...office_data,
        },
    include: inclusionArray,
  });

  if (!officeCars) {
    throw new AppError('Office cars could not be found', 404);
  }

  return officeCars;
};

module.exports = getOfficeCarsWithDetails;
