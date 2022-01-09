const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const CarStatusController = require('./carStatusController');

const carStatusRouter = Router();
const carStatusController = new CarStatusController();

carStatusRouter.get('/:id', carStatusController.getCarStatus);
carStatusRouter.post('/', carStatusController.createCarStatus);
carStatusRouter.put(
  '/:id',
  auth,
  role(['admin']),
  carStatusController.updateCarStatus
);

module.exports = carStatusRouter;
