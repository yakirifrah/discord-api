const express = require('express');

const router = express.Router();
const roleController = require('../controllers/role');


router.get('', roleController.getAllRoleByUserIDAndGuildID);

router.post('/add-role', async (req, res) => {


});

router.get('/all-roles-guild', roleController.getAllRoles);

module.exports = router;
