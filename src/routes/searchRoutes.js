const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const auth = require('../middlewares/authMiddleware');

router.get('/name', auth, searchController.searchByName);
router.get('/phone', auth, searchController.searchByPhone);

module.exports = router;
