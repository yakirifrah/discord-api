const Discord = require('discord.js');


class Client {
	constructor() {
		if (Client.instance == null) {
			this.client = new Discord.Client();
			Client.instance = this;
		}
		return Client.instance;
	}

	getRolesByUser({ userId, guildId }) {
		const guild = this.client.guilds.cache.get(guildId);
		const roleIDs = guild.members.cache.find(member => member.id === userId)._roles;
		if (!roleIDs.length) {
			return;
		}
		return roleIDs.map(id => ({
			id,
			role: guild.roles.cache.get(id).name,
		}));
	}

	getAllRoles({ userId, guildId }) {
		const guild = this.client.guilds.cache.get(guildId);
		const roleIDs = guild.members.cache.find(member => member.id === userId)._roles;
		const roles = guild.roles.cache.filter(role=>!role.managed && role.name !== '@everyone' && role.editable && !roleIDs.includes(role.id));
		return roles.map(role => ({
			id:role.id,
			role:role.name,
		}));
	}

	async setRoleMember({ userId, guildId, role }) {

		const guild = this.client.guilds.cache.get(guildId);
		const tempRole = guild.roles.cache.find(roleEl => roleEl.name === role);
		const member = guild.members.cache.find(memberEL => memberEL.id === userId);
		try {
			await member.roles.add(tempRole);
		}
		catch {
			throw 'Error';
		}
	}

	async editRoleMember({ userId, guildId, role }, operation) {
		const guild = this.client.guilds.cache.get(guildId);
		const tempRole = guild.roles.cache.find(roleEl => roleEl.name === role);
		const member = guild.members.cache.find(memberEL => memberEL.id === userId);
		try {
			operation === 'ADD' ? await member.roles.add(tempRole) : await member.roles.remove(tempRole);
		}
		catch {
			throw 'Error';
		}


	}


}
const client = new Client();
Object.freeze(client);
module.exports = client;
