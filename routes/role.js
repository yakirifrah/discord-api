const express = require('express');

const router = express.Router();
const roleController = require('../controllers/role');


router.get('', roleController.getAllRoleByUserIDAndGuildID);

router.post('/add-role-member', roleController.addRole);
router.post('/add-guild-role', roleController.addGuildRole);
router.post('/del-role-member', roleController.delRole);
router.get('/all-role-guild', roleController.getAllRoles);

module.exports = router;
