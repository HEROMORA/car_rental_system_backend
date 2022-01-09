const {
  getReservationsWithinPeriod,
  getCarReservationsWithinPeriod,
  getStatusOfAllCarsInDay,
  getCustomerReservations,
} = require('./services');

class ReportsController {
  async getReservationsWithinPeriodReport(req, res, next) {
    const report = await getReservationsWithinPeriod(req.query);
    res.status(200).json(report);
  }

  async getCarReservationsWithinPeriodReport(req, res, next) {
    const carId = req.params.carId;
    const report = await getCarReservationsWithinPeriod(carId, req.query);
    res.status(200).json(report);
  }

  async getStatusOfAllCarsInDayReport(req, res, next) {
    const date = req.params.date;
    const report = await getStatusOfAllCarsInDay(date);
    res.status(200).json(report);
  }

  async getCustomerReservationsReport(req, res, next) {
    const customer_id = req.params.customerId;
    const report = await getCustomerReservations(customer_id);
    res.status(200).json(report);
  }
}

module.exports = ReportsController;
