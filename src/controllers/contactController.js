// const { Contact } = require('../models');

// const contactController = {
//   createContact: async (req, res) => {
//     try {
//       const { userId, contactId, name, phone } = req.body;
//       const contact = await Contact.create({ userId, contactId, name, phone });
//       res.json({ message: 'Contact created successfully' });
//     } catch (error) {
//       res.status(400).json({ message: 'Error creating contact' });
//     }
//   },

//   getContacts: async (req, res) => {
//     try {
//       const userId = req.user.id; // Assuming you have middleware to get the authenticated user's ID
//       const contacts = await Contact.findAll({ where: { userId } });
//       res.json(contacts);
//     } catch (error) {
//       res.status(500).json({ message: 'Error retrieving contacts' });
//     }
//   }
// };

// module.exports = contactController;


const contactService = require('../services/contactService');

exports.addContact = async (req, res) => {
  try {
    const contact = await contactService.addContact(req.user.id, req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
