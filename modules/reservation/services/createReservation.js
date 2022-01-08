const Reservation = require('../../../models/reservation');
const Payment = require('../../../models/payment');
const Pickup = require('../../../models/pickup');
const sequelize = require('../../../instances/sequelize');
const CarPrice = require('../../../models/car_price');
const AppError = require('../../../utils/appError');

const { Op } = require('sequelize');

const createReservation = async (resData) => {
  var today = new Date();
  var nowDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  if (new Date(resData.return_date) < new Date(resData.pickup_date)) {
    throw new AppError('Invalid Dates', 400);
  }

  // TODO: HANDLE INTERSECTING DATES!
  // const reservations = await Reservation.findAll({
  //   where: {
  //     car_id: resData.car_id,
  //     [Op.or]: [
  //       {
  //         return_date: {
  //           [Op.between]: [resData.pickup_date, resData.return_date],
  //         },
  //       },
  //       {
  //         '$pickup.pickup_date$': {
  //           [Op.between]: [resData.pickup_date, resData.return_date],
  //         },
  //       },
  //     ],
  //   },
  //   include: {
  //     model: Pickup,
  //     required: true,
  //   },
  // });

  // if (reservations.length > 0) {
  //   throw new AppError('This car is already reserved at this time!', 400);
  // }

  // const pickups = await Pickup.findAll({
  //   where: {
  //     car_id: resData.car_id,
  //     return_date: { [between]: [resData.pickup_date, resData.return_date] },
  //   },

  // });

  const t = await sequelize.transaction();

  try {
    const reservation = await Reservation.create(
      {
        car_id: resData.car_id,
        customer_id: resData.customer_id,
        res_date: nowDate,
        return_date: resData.return_date,
      },
      { transaction: t }
    );

    const pickup = await Pickup.create(
      {
        res_id: reservation.res_id,
        pickup_address: resData.pickup_address,
        pickup_date: resData.pickup_date,
      },
      { transaction: t }
    );

    const date1 = new Date(pickup.pickup_date);
    const date2 = new Date(reservation.return_date);

    const Difference_In_Time = date2.getTime() - date1.getTime();

    let diff_in_days = Difference_In_Time / (1000 * 3600 * 24);
    diff_in_days = Math.max(diff_in_days, 1);

    const car_price = await CarPrice.findByPk(reservation.car_id, {
      transaction: t,
    });

    const payment = await Payment.create(
      {
        res_id: reservation.res_id,
        amount: car_price.price_per_day * diff_in_days,
        payment_date:
          resData.payment_time == 'now' ? nowDate : resData.pickup_date,
      },
      { transaction: t }
    );

    await t.commit();

    return { reservation, pickup, payment };
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

module.exports = createReservation;
