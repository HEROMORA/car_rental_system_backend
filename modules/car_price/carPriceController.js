const { createCarPrice, getCarPrice, updateCarPrice } = require('./services');

class CarPriceController {
  async createPrice(req, res, next) {
    const carPrice = await createCarPrice(req.body);
    res.status(201).json(carPrice);
  }

  async getCarPrice(req, res, next) {
    const carPrice = await getCarPrice(req.params.id);
    res.status(200).json(carPrice);
  }

  async updateCarPrice(req, res, next) {
    const carPrice = await updateCarPrice(req.params.id, req.body);
    res.status(200).json(carPrice);
  }
}

module.exports = CarPriceController;
