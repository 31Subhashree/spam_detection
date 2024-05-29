const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await userService.login(req.body.phone, req.body.password);
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(401).json({ success: false, error: 'Invalid credentials' });
  }
};
