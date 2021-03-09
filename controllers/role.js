const client = require('../utils/clinet');

module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res, next) => {
		await client.getRoles();
		next();

	},
};
