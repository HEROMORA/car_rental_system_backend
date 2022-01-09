const Customer = require('../../../models/customer');
const { pick } = require('lodash');
const { Op } = require('sequelize');

const getCustomers = async (query) => {
  const customerQuery = pick(query, [
    'phone',
    'address',
    'license_number',
    'account_id',
    'customer_id',
  ]);

  const customers = await Customer.findAll({ where: customerQuery });
  return customers;
};

module.exports = getCustomers;
