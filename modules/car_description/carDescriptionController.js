const { createCarDescription, getCarDescriptionById , updateCarDescription } = require('./services');

class CarDescriptionController {
  async createCarDescription(req, res, next) {
    const carDescription = await createCarDescription(req.body);
    res.status(201).json(carDescription);
  }

  async getCarDescriptionById(req, res, next) {
    const carDescription = await getCarDescriptionById(req.params.id);
    res.status(200).json(carDescription);
  }

  async updateCarDescription(req, res, next) {
    const carDescription = await updateCarDescription(req.params.id, req.body);
    res.status(200).json(carDescription);
  }
}

module.exports = CarDescriptionController;
