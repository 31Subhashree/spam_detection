const { Contact } = require('../models');

exports.addContact = async (userId, contactData) => {
  contactData.userId = userId;
  return await Contact.create(contactData);
};
