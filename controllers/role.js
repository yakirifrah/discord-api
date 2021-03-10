const client = require('../utils/clinet');

module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res, next) => {
		const { userId } = req.query;
		const guildId = '811211435979440178';
		if (!client.getRolesByUser({ userId, guildId })) {
			res.status(200).send([]);
		}
		res.status(200).send(client.getRolesByUser({ userId, guildId }));
		next();
	},
};
