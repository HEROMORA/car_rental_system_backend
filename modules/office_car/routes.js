const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const OfficeCarController = require('./officeCarController');

const officeCarRouter = Router();
const officeCarController = new OfficeCarController();

officeCarRouter.use(auth);
officeCarRouter.use(role(['customer']));

officeCarRouter.get('/details', officeCarController.getOfficeCarsWithDetails);
officeCarRouter.post('/', officeCarController.createOfficeCar);
officeCarRouter.get('/:id', officeCarController.getOfficeCarById);
officeCarRouter.get('/', officeCarController.getAllOfficeCars);
officeCarRouter.delete('/:id', officeCarController.deleteOfficeCarById);
module.exports = officeCarRouter;
