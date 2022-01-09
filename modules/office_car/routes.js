const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const OfficeCarController = require('./officeCarController');

const officeCarRouter = Router();
const officeCarController = new OfficeCarController();

officeCarRouter.get(
  '/details',
  auth,
  role(['customer']),
  officeCarController.getOfficeCarsWithDetails
);

officeCarRouter.post(
  '/',
  auth,
  role(['customer']),
  officeCarController.createOfficeCar
);

officeCarRouter.get(
  '/:id',
  auth,
  role(['customer']),
  officeCarController.getOfficeCarById
);

officeCarRouter.get(
  '/',
  auth,
  role(['customer']),
  officeCarController.getAllOfficeCars
);

officeCarRouter.delete(
  '/:id',
  auth,
  role(['admin']),
  officeCarController.deleteOfficeCarById
);

officeCarRouter.post(
  '/carDesc',
  auth,
  role(['admin']),
  officeCarController.createOfficeCarFromDescription
);
module.exports = officeCarRouter;
