// const { User } = require('../models');

// const searchController = {
//   searchByName: async (req, res) => {
//     try {
//       const { q } = req.query;
//       const users = await User.findAll({
//         where: {
//           name: {
//             [Op.like]: `%${q}%`
//           }
//         }
//       });
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: 'Error searching for users by name' });
//     }
//   },

//   searchByPhone: async (req, res) => {
//     try {
//       const { q } = req.query;
//       const users = await User.findAll({
//         where: {
//           phone: q
//         }
//       });
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ message: 'Error searching for users by phone number' });
//     }
//   }
// };

// module.exports = searchController;

const searchService = require('../services/searchService');

exports.searchByName = async (req, res) => {
  try {
    const results = await searchService.searchByName(req.query.name);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchByPhone = async (req, res) => {
  try {
    const result = await searchService.searchByPhone(req.query.phone);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
