const {
  createOfficeCar,
  getOfficeCarById,
  getAllOfficeCars,
  deleteOfficeCarById,
  getOfficeCarsWithDetails,
  createOfficeCarFromDescription,
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

  async deleteOfficeCarById(req, res, next) {
    const officeCar = await deleteOfficeCarById(req.params.id);
    res.status(200).json(officeCar);
  }

  async createOfficeCarFromDescription(req, res, next) {
    const officeCar = await createOfficeCarFromDescription(req.body);
    res.status(200).json(officeCar);
  }
}

module.exports = OfficeCarController;
