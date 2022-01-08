const  { createReservation , getReservationTimes } = require('./services');

class reservationController{
    
    async getReservationTimes(req, res, next) {
        const reservationTimes = await getReservationTimes(req.params.carid);
        res.status(200).json(reservationTimes);
      }


    async createReservation(req, res, next) {
        const reservation = await createReservation({...req.body, customer_id: req.user.customer_id}
          );
        res.status(201).json(reservation);
      }
}

module.exports = reservationController;