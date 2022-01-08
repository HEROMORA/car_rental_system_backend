const { Router } = require('express');

const CarPriceController = require('./carPriceController');

const carPriceRouter = Router();
const carPriceController = new CarPriceController();

carPriceRouter.post('/', carPriceController.createPrice);
carPriceRouter.get('/:id', carPriceController.getCarPrice);
carPriceRouter.put('/:id', carPriceController.updateCarPrice);

module.exports = carPriceRouter;
