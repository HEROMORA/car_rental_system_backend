const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');

const CarStatus = sequelize.define('car_status', {
  // Model attributes are defined here
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
  },
});

CarStatus.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

module.exports = CarStatus;
