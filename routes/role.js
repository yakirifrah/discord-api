const express = require('express');

const router = express.Router();
const roleController = require('../controllers/role');
const authController = require('../controllers/auth');
router.get('', authController.protected, roleController.getAllRoleByUserIDAndGuildID);

router.post('/add-role', async (req, res) => {


});

module.exports = router;
