const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Account = require('./account');

const Customer = sequelize.define('Customer', {
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
},
{
  tableName: 'customer',
  timestamps: false,
});

Customer.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'account_id',
});

module.exports = Customer;
