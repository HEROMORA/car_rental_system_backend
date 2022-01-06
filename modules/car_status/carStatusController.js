const {
  createCarStatus,
  getCarStatus,
  updateCarStatus,
} = require('./services');

class CarStatusController {
  async createCarStatus(req, res, next) {
    const carStatus = await createCarStatus(req.body);
    res.status(201).json(carStatus);
  }

  async getCarStatus(req, res, next) {
    const carStatus = await getCarStatus(req.params.id);
    res.status(200).json(carStatus);
  }

  async updateCarStatus(req, res, next) {
    const carStatus = await updateCarStatus(req.params.id, req.body);
    res.status(200).json(carStatus);
  }
}

module.exports = CarStatusController;
