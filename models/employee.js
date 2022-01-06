const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Account = require('./account');

const Employee = sequelize.define(
  'Employee',
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Employee',
    timestamps: false,
  }
);

Employee.belongsTo(Account, {
  foreignKey: 'account_id',
  targetKey: 'account_id',
});

module.exports = Employee;
