const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');

const Account = sequelize.define(
  'Account',
  {
    // Model attributes are defined here
    account_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'account',
    timestamps: false,
  }
);

module.exports = Account;
