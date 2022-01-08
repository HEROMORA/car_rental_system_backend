const { Router } = require('express');

const OfficeCarController = require('./officeCarController');

const officeCarRouter = Router();
const officeCarController = new OfficeCarController();

officeCarRouter.post('/', officeCarController.createOfficeCar);
officeCarRouter.get('/:id', officeCarController.getOfficeCarById);
officeCarRouter.get('/', officeCarController.getAllOfficeCars);

module.exports = officeCarRouter;
