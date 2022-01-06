const { createCarPrice, getCarPrice } = require('./services');

class CarPriceController {
  async createPrice(req, res, next) {
    const carPrice = await createCarPrice(req.body);
    res.status(201).json(carPrice);
  }

  async getCarPrice(req, res, next) {
    const carPrice = await getCarPrice(req.params.id);
    res.status(200).json(carPrice);
  }
}

module.exports = CarPriceController;
