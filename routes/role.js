const express = require('express');

const router = express.Router();
const roleController = require('../controllers/role');


router.get('/role-member', roleController.getAllRoleByUserIDAndGuildID);
router.get('/all-role-guild', roleController.getAllRoles);

router.post('/add-role-member', roleController.addRole);
router.post('/del-role-member', roleController.delRole);

router.post('/add-guild-role', roleController.addGuildRole);

module.exports = router;
