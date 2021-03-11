const client = require('../utils/clinet');

const GUILD_ID = '811211435979440178';

module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res) => {
		const { userId } = req.query;
		try {
			if (!client.getRolesByUser({ userId, GUILD_ID })) {
				res.status(200).send([]);
			}
			return res.status(200).send(client.getRolesByUser({ userId, GUILD_ID }));
		}
		catch {
			res.status(401).end('error');
		}
	},

	getAllRoles:  async (req, res) => {
		const { userId } = req.query;
		try {
			const result = client.getAllRoles({ userId, GUILD_ID });
			return res.status(200).send(result);
		}
		catch {
			res.status(401).end('error');
		}
	},

	addRole:async (req, res) => {
		const { role, userId } = req.query;
		try {
			await client.editRoleMember({ userId, role, GUILD_ID }, 'ADD');
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},

	delRole: async (req, res) => {
		const { role, userId } = req.query;
		try {
			await client.editRoleMember({ userId, role, GUILD_ID }, 'DEL');
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},

	addGuildRole: async (req, res) => {
		const { role, color } = req.query;
		try {
			await client.addRoleToGuild({ GUILD_ID, role, color });
			res.status(200).end('success');
		}
		catch {
			res.status(401).end('error');
		}
	},
};
