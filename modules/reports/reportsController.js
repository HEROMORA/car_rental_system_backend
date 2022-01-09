const getReservationsWithinPeriod = require('./services/getReservationsWithinPeriod');

class ReportsController {
  async getReservationsWithinPeriodReport(req, res, next) {
    const report = await getReservationsWithinPeriod(req.query);
    res.status(200).json(report);
  }
}

module.exports = ReportsController;
