const bcryptjs = require('bcryptjs');

const sequelize = require('../../../instances/sequelize');
const Account = require('../../../models/account');
const Customer = require('../../../models/customer');
const AppError = require('../../../utils/appError');
const generateCustomerToken = require('../../../utils/generateCustomerToken');

const signup = async (body) => {
  let account = await Account.findOne({ where: { email: body.email } });

  if (account) {
    throw new AppError('Email Already Exists!', 400);
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(body.password, salt);

  const t = await sequelize.transaction();
  let customer;
  try {
    account = await Account.create(
      {
        email: body.email,
        password: hashedPassword,
        name: body.name,
      },
      { transaction: t }
    );

    customer = await Customer.create(
      {
        account_id: account.account_id,
        phone: body.phone,
        address: body.address,
        license_number: body.license_number,
      },
      { transaction: t }
    );

    await t.commit();
  } catch (err) {
    throw err;
  }

  const token = generateCustomerToken({
    customer_id: customer.customer_id,
    account_id: customer.account_id,
  });

  return {
    message: 'registered successfully!',
    role: 'customer',
    customer,
    token,
  };
};

module.exports = signup;
