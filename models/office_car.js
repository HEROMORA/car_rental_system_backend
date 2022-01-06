const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');
const Office = require('./office');

const OfficeCar = sequelize.define('office_car', {
  // Model attributes are defined here
  office_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

OfficeCar.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

OfficeCar.belongsTo(Office, {
  foreignKey: 'office_id',
  targetKey: 'office_id',
});

module.exports = OfficeCar;
