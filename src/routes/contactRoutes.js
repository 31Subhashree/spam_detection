const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, contactController.addContact);

module.exports = router;
