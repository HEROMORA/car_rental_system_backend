const { Router } = require('express');

const CarController = require('./carController');

const carRouter = Router();
const carController = new CarController();

// GET /api/v1/cars
carRouter.get('/', carController.getCars);
carRouter.post('/', carController.createCar);

carRouter.get('/:id', carController.getCarWithDetails);

module.exports = carRouter;
