const {
  createOfficeCar,
  getOfficeCarById,
  getAllOfficeCars,
} = require('./services');

class OfficeCarController {
  async createOfficeCar(req, res, next) {
    const officeCar = await createOfficeCar(req.body);
    res.status(201).json(officeCar);
  }

  async getOfficeCarById(req, res, next) {
    const officeCar = await getOfficeCarById(req.params.id);
    res.status(200).json(officeCar);
  }

  async getAllOfficeCars(req, res, next) {
    const officeCars = await getAllOfficeCars();
    res.status(200).json(officeCars);
  }
}

module.exports = OfficeCarController;
