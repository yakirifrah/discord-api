const Discord = require('discord.js');


class Client {
	constructor() {
		if (Client.instance == null) {
			this.client = new Discord.Client();
			Client.instance = this;
		}
		return Client.instance;
	}

	getRolesByUser({ userId, GUILD_ID }) {
		try {
			const guild = this.client.guilds.cache.get(GUILD_ID);
			const roleIDs = guild.members.cache.find(member => member.id === userId)._roles;
			if (!roleIDs.length) {
				return;
			}
			return roleIDs.map(id => ({
				id,
				role: guild.roles.cache.get(id).name,
			}));
		}
		catch {
			throw 'Error';
		}
	}

	getAllRoles({ userId, GUILD_ID }) {
		try {
			const guild = this.client.guilds.cache.get(GUILD_ID);
			const roleIDs = guild.members.cache.find(member => member.id === userId)._roles;
			const roles = guild.roles.cache.filter(role=>!role.managed && role.name !== '@everyone' && role.editable && !roleIDs.includes(role.id));
			return roles.map(role => ({
				id:role.id,
				role:role.name,
			}));
		}
		catch {
			throw 'Error';
		}
	}

	async addRoleToGuild({ GUILD_ID, role, color }) {
		const guild = this.client.guilds.cache.get(GUILD_ID);
		if (!guild.roles.cache.find(roleEl=>roleEl.name === role)) {
			try {
				await guild.roles.create({
					data:{
						name: role,
						color,
					},
					reason: `we needed a role for ${role} peoples`,
				});
			}
			catch {
				throw 'Error';
			}
		}
	}

	async editRoleMember({ userId, GUILD_ID, role }, operation) {
		const guild = this.client.guilds.cache.get(GUILD_ID);
		const tempRole = guild.roles.cache.find(roleEl => roleEl.name === role);
		const member = guild.members.cache.find(memberEL => memberEL.id === userId);
		try {
			return operation === 'ADD' ? await member.roles.add(tempRole) : await member.roles.remove(tempRole);
		}
		catch {
			throw 'Error';
		}
	}


}
const client = new Client();
Object.freeze(client);
module.exports = client;
