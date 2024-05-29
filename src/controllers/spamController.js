// const { SpamNumber } = require('../models');

// const spamController = {
//   markSpam: async (req, res) => {
//     try {
//       const { userId, phone } = req.body;
//       const spamNumber = await SpamNumber.create({ userId, phone });
//       res.json({ message: 'Number marked as spam successfully' });
//     } catch (error) {
//       res.status(400).json({ message: 'Error marking number as spam' });
//     }
//   }
// };

// module.exports = spamController;


const spamService = require('../services/spamService');

exports.markAsSpam = async (req, res) => {
  try {
    const spamEntry = await spamService.markAsSpam(req.body.phone, req.user.id);
    res.status(201).json(spamEntry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
