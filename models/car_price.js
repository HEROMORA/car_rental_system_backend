const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');

const CarPrice = sequelize.define('car_price', {
  // Model attributes are defined here
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  price_per_day: {
    type: DataTypes.INTEGER,
  },
});

CarPrice.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

module.exports = CarPrice;
