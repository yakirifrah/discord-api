const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/auth/discord_login_callback', authController.loginCallback);

module.exports = router;
