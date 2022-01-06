const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Account = require('./account');

const Customer = sequelize.define(
  'Customer',
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    license_number: {
      type: DataTypes.STRING,
      allowNull: false,

      unique: true,
    },
  },
  {
    tableName: 'customer',
    timestamps: false,
  }
);

Customer.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'account_id',
});

module.exports = Customer;
