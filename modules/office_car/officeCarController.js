const {
  createOfficeCar,
  getOfficeCarById,
  getAllOfficeCars,
  getOfficeCarsWithDetails,
} = require('./services');

class OfficeCarController {
  async createOfficeCar(req, res, next) {
    const officeCar = await createOfficeCar(req.body);
    res.status(201).json(officeCar);
  }
  async getOfficeCarsWithDetails(req, res, next) {
    const officeCars = await getOfficeCarsWithDetails(
      req.user.customer_id,
      req.query
    );
    res.status(200).json(officeCars);
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
