// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Spam_Mobile_No', 'root', 'Heythere@123', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql',
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'Spam_Mobile_No',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Heythere@123',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
