const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const CarDescriptionController = require('./carDescriptionController');

const carDescriptionRouter = Router();
const carDescriptionController = new CarDescriptionController();

carDescriptionRouter
  .route('/')
  .get(auth, role(['admin']), carDescriptionController.getCarDescriptions)
  .post(auth, role(['admin']), carDescriptionController.createCarDescription);

carDescriptionRouter
  .route('/:id')
  .get(carDescriptionController.getCarDescriptionById);

carDescriptionRouter
  .route('/:id')
  .put(carDescriptionController.updateCarDescription);

module.exports = carDescriptionRouter;
