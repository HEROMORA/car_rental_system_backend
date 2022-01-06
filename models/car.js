const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../instances/sequelize');
const CarDescription = require('./car_description');

const Car = sequelize.define(
  'Car',
  {
    // Model attributes are defined here
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    plate_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    car_description_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'car',
    timestamps: false,
  }
);

Car.belongsTo(CarDescription, {
  foreignKey: 'car_description_id',
  targetKey: 'car_description_id',
});

module.exports = Car;
