const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');
const searchRoutes = require('./searchRoutes');
const spamRoutes = require('./spamRoutes');

router.use('/users', userRoutes);
router.use('/contacts', contactRoutes);
router.use('/search', searchRoutes);
router.use('/spam', spamRoutes);

module.exports = router;
