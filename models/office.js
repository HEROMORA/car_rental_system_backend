const { DataTypes } = require('sequelize');
const sequelize = require('../instances/sequelize');

const Office = sequelize.define(
  'Office',
  {
    // Model attributes are defined here
    office_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'office',
    timestamps: false,
  }
);

module.exports = Office;
