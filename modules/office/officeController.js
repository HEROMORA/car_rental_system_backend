const { getOffices, createOffice } = require('./services');

class OfficeController {
  async getAllOffices(req, res, next) {
    const offices = await getOffices();
    res.status(200).json(offices);
  }

  async createOffice(req, res, next) {
    const office = await createOffice(req.body);
    res.status(201).json(office);
  }
}

module.exports = OfficeController;
