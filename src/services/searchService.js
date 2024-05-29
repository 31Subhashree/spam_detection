const { User, Contact, SpamNumber } = require('../models');
const { Op } = require('sequelize');

exports.searchByName = async (name) => {
  const users = await User.findAll({
    where: {
      name: {
        [Op.like]: `${name}%`
      }
    },
    include: [
      {
        model: SpamNumber,
        attributes: ['phone', 'spamCount']
      }
    ]
  });
  const contacts = await Contact.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    }
  });
  return { users, contacts };
};

exports.searchByPhone = async (phone) => {
  const user = await User.findOne({ where: { phone } });
  const contacts = await Contact.findAll({ where: { phone } });
  const spam = await SpamNumber.findOne({ where: { phone } });

  return { user, contacts, spam };
};

