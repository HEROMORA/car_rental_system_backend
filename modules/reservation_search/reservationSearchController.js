const { searchReservation } = require('./services');

class searchReservationController {
  
  async searchReservation(req, res, next) {
    const reservations = await searchReservation(req.query);
    res.status(200).json(reservations);
  }
}

module.exports = searchReservationController;
