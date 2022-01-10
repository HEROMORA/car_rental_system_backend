const Car = require('../../../models/car');
const CarDescription = require('../../../models/car_description');
const Customer = require('../../../models/customer');
const Reservation = require('../../../models/reservation');
const Account = require('../../../models/account');

const getCustomerReservations = async (customer_id) => {
  const reservations = await Reservation.findAll({
    where: {
      customer_id: customer_id,
    },
    include: [
      {
        model: Customer,
        required: true,
        include: [
          {
            model: Account,
            attributes: ['name','email'],
            required: true,
          },
        ],
      },
      {
        model: Car,
        attributes: ['plate_id'],
        required: true,
        include: [
          {
            model: CarDescription,
            attributes: ['model'],
            required: true,
          },
        ],
      },
    ],
  });

  return reservations;
};

module.exports = getCustomerReservations;
