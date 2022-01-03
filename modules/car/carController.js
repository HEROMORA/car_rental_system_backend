const { getCars } = require('./services');

class CarController {
  getCars(req, res, next) {
    const cars = getCars();
    res.status(200).json(cars);
  }

  getAllAvailableCars() {}

  createCar() {}
}

module.exports = CarController;
