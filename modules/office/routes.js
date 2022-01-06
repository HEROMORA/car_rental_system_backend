const { Router } = require('express');
const OfficeController = require('./officeController');

const officeRouter = Router();
const officeController = new OfficeController();

officeRouter
  .route('/')
  .get(officeController.getAllOffices)
  .post(officeController.createOffice);

module.exports = officeRouter;
