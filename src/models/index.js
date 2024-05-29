const sequelize = require('../config/sequelize');
const User = require('./User');
const Contact = require('./Contact');

sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Error synchronizing database:', err);
});

module.exports = { User, Contact };
