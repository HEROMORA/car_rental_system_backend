const { Router } = require('express');
const CarStatusController = require('./carStatusController');

const carStatusRouter = Router();
const carStatusController = new CarStatusController();

carStatusRouter.get('/:id', carStatusController.getCarStatus);
carStatusRouter.post('/', carStatusController.createCarStatus);
carStatusRouter.put('/:id', carStatusController.updateCarStatus);

module.exports = carStatusRouter;
