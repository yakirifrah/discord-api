const client = require('../utils/clinet');
const constants = require('../constants');

const guildId = constants.GUILD_ID;

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
			await client.editRoleMember({ userId, role, guildId }, 'ADD');
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},

	delRole: async (req, res) => {
		const { role, userId } = req.query;
		try {
			await client.editRoleMember({ userId, role, guildId }, 'DEL');
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},
};
