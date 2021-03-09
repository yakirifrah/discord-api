const client = require('../utils/clinet');

module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res, next) => {
		// const { userId } = req.params.user;
		if (!await client.getRoles()) {
			res.json({
				status: 200,
				data: {},
			});

		}
		res.json({
			status: 200,
			data:await client.getRoles(),
		});
		next();

	},
};
