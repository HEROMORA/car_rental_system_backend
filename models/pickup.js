const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Reservation = require('./reservation');

const Pickup = sequelize.define('Pickup', {
  pickup_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  res_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pickup_date: {
    type: DataTypes.DATE,
  },
  pickup_address: {
    type: DataTypes.STRING,
  },
});

Pickup.belongsTo(Reservation, {
  foreignKey: 'res_id',
  targetKey: 'res_id',
});

module.exports = Pickup;
