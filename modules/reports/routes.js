const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const ReportsController = require('./reportsController');

const reportController = new ReportsController();
const reportsRouter = Router();

reportsRouter.use(auth);
reportsRouter.use(role(['admin']));

reportsRouter.get(
  '/reservations',
  reportController.getReservationsWithinPeriodReport
);

reportsRouter.get(
  '/car/:carId',
  reportController.getCarReservationsWithinPeriodReport
);

reportsRouter.get(
  '/carStatus/:date',
  reportController.getStatusOfAllCarsInDayReport
);

reportsRouter.get(
  '/customer/:customerId',
  reportController.getCustomerReservationsReport
);

reportsRouter.get(
  '/payments',
  reportController.getDailyPaymentsWithinPeriodReport
);

module.exports = reportsRouter;
