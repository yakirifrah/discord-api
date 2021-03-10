const client = require('../utils/clinet');
const guildId = '811211435979440178';
module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res) => {
		const { userId } = req.query;
		if (!client.getRolesByUser({ userId, guildId })) {
			res.status(200).send([]);
		}
		return res.status(200).send(client.getRolesByUser({ userId, guildId }));
	},

	getAllRoles:  async (req, res) => {
		const { userId } = req.query;
		const result = client.getAllRoles({ userId, guildId });
		return res.status(200).send(result);
	},

	addRole:async (req, res) => {
		const { role, userId } = req.query;
		try {
			await client.setRoleMember({ userId, role, guildId });
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},
};
