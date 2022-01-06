const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');
const Car = require('./car');
const Office = require('./office');

const OfficeCar = sequelize.define(
  'OfficeCar',
  {
    office_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    tableName: 'office_car',
    timestamps: false,
  }
);

OfficeCar.belongsTo(Car, {
  foreignKey: 'car_id',
  targetKey: 'car_id',
});

OfficeCar.belongsTo(Office, {
  foreignKey: 'office_id',
  targetKey: 'office_id',
});

module.exports = OfficeCar;
