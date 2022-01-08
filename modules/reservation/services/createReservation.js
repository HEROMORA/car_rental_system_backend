const Reservation = require('../../../models/reservation');
const Payment = require('../../../models/payment');
const Pickup = require('../../../models/pickup');
const sequelize = require('../../../instances/sequelize');

const createReservation = async (resData) => {

  var today = new Date();
  var nowDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const t = await sequelize.transaction();
    let reservation;
    let pickup;
    let payment;
    try{
    reservation = await Reservation.create({
      car_id: resData.car_id,
      customer_id: resData.customer_id,
      res_date: resData.res_date,
      return_date: resData.return_date,
    },
    { transaction: t });
    
    payment = await Payment.create({
      res_id: reservation.res_id,
      amount: 500.5,
      payment_date: resData.payment_time == 'now'? nowDate: resData.pickup_date
    },
    { transaction: t });
    
    pickup = await Pickup.create({
      res_id: reservation.res_id,
      pickup_address: resData.pickup_address,
      pickup_date: resData.pickup_date
    },
    { transaction: t });

    await t.commit();
  } catch (err) {
    await t.rollback();
    throw err;
  }
 
    return {reservation,pickup,payment};
  };


module.exports = createReservation;
