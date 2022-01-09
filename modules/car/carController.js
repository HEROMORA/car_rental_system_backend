const AppError = require('../../utils/appError');
const { getCars, createCar, getCarWithDetails , carSearch} = require('./services');

class CarController {
  async getCars(req, res, next) {
    const cars = await getCars({ query: req.query });
    res.status(200).json(cars);
  }

  getAllAvailableCars() {
    //TODO: get cars whose car status is available
  }

  async getCarWithDetails(req, res, next) {
    const car = await getCarWithDetails(req.params.id);
    res.status(200).json(car);
  }

  async createCar(req, res, next) {
    const car = await createCar(req.body);
    res.status(201).json(car);
  }

  async carSearch(req, res, next) {
    const car = await carSearch(req.query);
    res.status(200).json(car);
  }
}

module.exports = CarController;
