const client = require('../utils/clinet');

module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res, next) => {
		if (!client.getRoles()) {
			res.status(200).send([]);
		}
		res.status(200).send(client.getRoles());
		next();
	},
};
