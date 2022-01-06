const bcryptjs = require('bcryptjs');
const Account = require('../../../models/account');
const Customer = require('../../../models/customer');
const Employee = require('../../../models/employee');
const AppError = require('../../../utils/appError');
const generateEmployeeToken = require('../../../utils/generateEmployeeToken');
const generateCustomerToken = require('../../../utils/generateCustomerToken');

const login = async (body) => {
  const account = await Account.findOne({
    where: { email: body.email },
  });

  if (!account) {
    throw new AppError('No Email Address with this email is found', 404);
  }

  const authenticated = await bcryptjs.compare(body.password, account.password);

  if (!authenticated) {
    throw new AppError('Wrong password!', 400);
  }

  const customer = await Customer.findOne({
    where: {
      account_id: account.account_id,
    },
  });

  if (!customer) {
    const employee = await Employee.findOne({
      where: { account_id: account.account_id },
    });

    if (!employee) {
      throw new AppError('Error happened, user does not exist', 500);
    }

    const token = generateEmployeeToken({
      customer_id: employee.customer_id,
      account_id: employee.account_id,
    });

    return {
      message: 'logged in successfully!',
      role: 'admin',
      employee,
      token,
    };
  }

  const token = generateCustomerToken({
    customer_id: customer.customer_id,
    account_id: customer.account_id,
  });

  return {
    message: 'logged in successfully!',
    role: 'customer',
    customer,
    token,
  };
};

module.exports = login;
