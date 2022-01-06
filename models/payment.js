const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Reservation = require('./reservation');

const Payment = sequelize.define('Payment', {
  // Model attributes are defined here
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  res_id: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  payment_date: {
    type: DataTypes.DATE,
  },
});

Payment.belongsTo(Reservation, {
  foreignKey: 'res_id',
  targetKey: 'res_id',
});

module.exports = Payment;
