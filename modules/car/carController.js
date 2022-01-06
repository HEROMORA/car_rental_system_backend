const AppError = require('../../utils/appError');
const { getCars, createCar } = require('./services');

class CarController {
  async getCars(req, res, next) {
    const cars = await getCars({ query: req.query });
    res.status(200).json(cars);
  }

  getAllAvailableCars() {}

  async createCar(req, res, next) {
    const car = await createCar(req.body);
    res.status(201).json(car);
  }
}

module.exports = CarController;
