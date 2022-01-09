const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');

const CarController = require('./carController');

const carRouter = Router();
const carController = new CarController();

// GET /api/v1/cars
// carRouter.get('/', carController.getCars);
carRouter.post('/', carController.createCar);

carRouter.get('/', auth, role(['admin']), carController.getCarWithDetails);

module.exports = carRouter;
