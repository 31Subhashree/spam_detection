// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize');
// const User = require('./User');

// const Contact = sequelize.define('Contact', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'Users', // This should match the table name in the User model
//       key: 'id'
//     }
//   },
//   contactId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: 'Users', // This should match the table name in the User model
//       key: 'id'
//     }
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   tableName: 'Contacts',
//   timestamps: true
// });

// // Define associations
// User.hasMany(Contact, { foreignKey: 'userId', as: 'contacts' });
// User.hasMany(Contact, { foreignKey: 'contactId', as: 'contactReferences' });

// Contact.belongsTo(User, { foreignKey: 'userId', as: 'user' });
// Contact.belongsTo(User, { foreignKey: 'contactId', as: 'contact' });

// module.exports = Contact;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User');

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = Contact;
