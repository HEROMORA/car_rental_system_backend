const { Router } = require('express');

const CarController = require('./carController');

const carRouter = Router();
const carController = new CarController();

carRouter.get('/', carController.getCars);

module.exports = carRouter;
