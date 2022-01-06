const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../instances/sequelize');

const Car = sequelize.define(
  'Car',
  {
    // Model attributes are defined here
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Car;
