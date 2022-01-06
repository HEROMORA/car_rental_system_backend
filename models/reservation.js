const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');
const Customer = require('./customer');

const Reservation = sequelize.define('Reservation', {
  // Model attributes are defined here
  res_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  car_id: {
    type: DataTypes.INTEGER,
  },
  customer_id: {
    type: DataTypes.INTEGER,
  },
  res_date: {
    type: DataTypes.DATE,
  },
  return_date: {
    type: DataTypes.DATE,
  },
});

Reservation.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

Reservation.belongsTo(Customer, {
  foreignKey: 'customer_id',
  targetKey: 'customer_id',
});

module.exports = Reservation;
