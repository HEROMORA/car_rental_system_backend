const Reservation = require('../../../models/reservation');
const Payment = require('../../../models/payment');
const Pickup = require('../../../models/pickup');
const sequelize = require('../../../instances/sequelize');
const CarPrice = require('../../../models/car_price');

const createReservation = async (resData) => {
  var today = new Date();
  var nowDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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
