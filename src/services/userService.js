// const { User } = require('../models');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.register = async (userData) => {
//   const salt = await bcrypt.genSalt(10);
//   userData.password = await bcrypt.hash(userData.password, salt);
//   return await User.create(userData);
// };

// exports.login = async (phone, password) => {
//   const user = await User.findOne({ where: { phone } });
//   if (!user) throw new Error('Invalid phone or password.');

//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword) throw new Error('Invalid phone or password.');

//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//   return token;
// };


const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
  try {
    // Validate input data
    if (!userData.name || !userData.phone || !userData.password) {
      throw new Error('Name, phone, and password are required.');
    }

    // Check if the phone number is already registered
    const existingUser = await User.findOne({ where: { phone: userData.phone } });
    if (existingUser) {
      throw new Error('Phone number already registered.');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Create the user
    const newUser = await User.create({ ...userData, password: hashedPassword });

    return newUser;
  } catch (error) {
    throw new Error(`Error registering user: ${error.message}`);
  }
};

exports.login = async (phone, password) => {
  try {
    // Find the user by phone number
    const user = await User.findOne({ where: { phone } });
    if (!user) {
      throw new Error('User not found.');
    }

    // Verify the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Incorrect password.');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
  } catch (error) {
    throw new Error(`Error logging in user: ${error.message}`);
  }
};
