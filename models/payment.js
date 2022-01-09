const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Reservation = require('./reservation');

const Payment = sequelize.define(
  'Payment',
  {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'payment',
    timestamps: false,
  }
);

Payment.belongsTo(Reservation, {
  foreignKey: 'res_id',
  targetKey: 'res_id',
});

Reservation.hasOne(Payment, {
  foreignKey: 'res_id',
  targetKey: 'res_id',
});

module.exports = Payment;
