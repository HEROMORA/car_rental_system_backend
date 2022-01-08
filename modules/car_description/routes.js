const { Router } = require('express');
const CarDescriptionController = require('./carDescriptionController');

const carDescriptionRouter = Router();
const carDescriptionController = new CarDescriptionController();

carDescriptionRouter
  .route('/')
  .post(carDescriptionController.createCarDescription);

carDescriptionRouter
  .route('/:id')
  .get(carDescriptionController.getCarDescriptionById);

module.exports = carDescriptionRouter;
