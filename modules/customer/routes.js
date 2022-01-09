const { Router } = require('express');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const CustomerController = require('./customerController');

const customerRouter = Router();
const customerController = new CustomerController();

customerRouter.get('/', auth, role(['admin']), customerController.getCustomers);

module.exports = customerRouter;
