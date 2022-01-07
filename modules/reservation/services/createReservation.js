const Reservation = require('../../../models/reservation');

const createReservation = async (resData) => {
    const reservation = await Reservation.create({
      res_id: resData.res_id,
      car_id: resData.car_id,
      customer_id: resData.customer_id,
      res_date: resData.res_date,
      return_date: resData.return_date,
    });
  
    return reservation;
  };

module.exports = createReservation;
