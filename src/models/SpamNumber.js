// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize');
// const User = require('./User');

// const SpamNumber = sequelize.define('SpamNumber', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'User',
//       key: 'id',
//     },
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// module.exports = SpamNumber;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User');

const SpamNumber = sequelize.define('SpamNumber', {
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  spamCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
});

module.exports = SpamNumber;
