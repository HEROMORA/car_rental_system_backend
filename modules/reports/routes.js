const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const ReportsController = require('./reportsController');

const reportController = new ReportsController();
const reportsRouter = Router();

reportsRouter.get(
  '/reservations',
  auth,
  role(['admin']),
  reportController.getReservationsWithinPeriodReport
);

module.exports = reportsRouter;
