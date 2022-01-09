const { getCustomers } = require('./services');

class CustomerController {
  async getCustomers(req, res, next) {
    const customers = await getCustomers(req.query);
    res.status(200).json(customers);
  }
}

module.exports = CustomerController;
