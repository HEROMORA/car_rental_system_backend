const Customer = require('../../../models/customer');
const { pick } = require('lodash');
const Account = require('../../../models/account');

const getCustomers = async (query) => {
  const customerQuery = pick(query, [
    'phone',
    'address',
    'license_number',
    'account_id',
    'customer_id',
  ]);

  const accountQuery = pick(query, ['email', 'name']);

  const customers = await Customer.findAll({
    where: customerQuery,
    include: {
      model: Account,
      required: true,
      where: accountQuery,
    },
  });
  return customers;
};

module.exports = getCustomers;
