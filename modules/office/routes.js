const { Router } = require('express');
const OfficeController = require('./officeController');

const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const officeRouter = Router();
const officeController = new OfficeController();

officeRouter
  .route('/')
  .get(auth, role(['customer']), officeController.getAllOffices)
  .post(officeController.createOffice);

officeRouter.route('/:id').get(officeController.getOfficeById);

module.exports = officeRouter;
