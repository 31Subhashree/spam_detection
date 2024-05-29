const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.post('/register', [
  check('name').not().isEmpty(),
  check('phone').isMobilePhone(),
  check('password').isLength({ min: 5 })
], validationMiddleware, userController.register);

router.post('/login', [
  check('phone').isMobilePhone(),
  check('password').exists()
], validationMiddleware, userController.login);

module.exports = router;
