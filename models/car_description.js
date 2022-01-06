const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');

const CarDescription = sequelize.define(
  'CarDescription',
  {
    // Model attributes are defined here
    car_description_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    transmission: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'car_description',
    timestamps: false,
  }
);

module.exports = CarDescription;
