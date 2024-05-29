const express = require('express');
const router = express.Router();
const spamController = require('../controllers/spamController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, spamController.markAsSpam);

module.exports = router;
