const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Account = require('./account');

const Customer = sequelize.define('customer', {
  // Model attributes are defined here
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  phone: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  license_number: {
    type: DataTypes.STRING,
    unique: true,
  },
});

Customer.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'account_id',
});

module.exports = Customer;
