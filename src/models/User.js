// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/sequelize');

// class User extends Model {}

// User.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     unique: true,
//     allowNull: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'User',
// });

// module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
