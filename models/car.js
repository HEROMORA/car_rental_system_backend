const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../instances/sequelize');

// class Car extends Model {}

// Car.init(
//   {
//     // Model attributes are defined here
//     color: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     brand: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//     sequlize, // We need to pass the connection instance
//     modelName: 'Car', // We need to choose the model name
//   }
// );

const Car = sequelize.define(
  'Car',
  {
    // Model attributes are defined here
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

module.exports = Car;
