const { Router } = require('express');
const OfficeController = require('./officeController');

const officeRouter = Router();
const officeController = new OfficeController();

officeRouter
  .route('/')
  .get(officeController.getAllOffices)
  .post(officeController.createOffice);

officeRouter.route('/:id').get(officeController.getOfficeById);


module.exports = officeRouter;
