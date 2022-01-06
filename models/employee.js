const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Account = require('./account');

const Employee = sequelize.define('employee', {
  // Model attributes are defined here
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
});

Employee.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'account_id',
});

module.exports = Employee;
