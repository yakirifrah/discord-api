const client = require('../utils/clinet');

const GUILD_ID = process.env.GUILD_ID;
console.log({ GUILD_ID });
module.exports = {
	getAllRoleByUserIDAndGuildID: async (req, res) => {
		const { userId } = req.query;
		if (!client.getRolesByUser({ userId, GUILD_ID })) {
			res.status(200).send([]);
		}
		return res.status(200).send(client.getRolesByUser({ userId, GUILD_ID }));
	},

	getAllRoles:  async (req, res) => {
		const { userId } = req.query;
		const result = client.getAllRoles({ userId, GUILD_ID });
		return res.status(200).send(result);
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
};
