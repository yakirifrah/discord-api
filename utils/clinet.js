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
		const guildMembers = this.client.guilds.cache.get(guildId);
		const roleIDs = guildMembers.members.cache.find(member => member.id === userId)._roles;
		if (!roleIDs.length) {
			return;
		}
		return roleIDs.map(id => ({
			id,
			role: guildMembers.roles.cache.get(id).name,
		}));
	}

	getAllRoles({ userId, guildId }) {
		const guildMembers = this.client.guilds.cache.get(guildId);
		const roleIDs = guildMembers.members.cache.find(member => member.id === userId)._roles;
		console.log({ roleIDs });
		const roles = guildMembers.roles.cache.filter(role=>!role.managed && role.name !== '@everyone' && role.editable && !roleIDs.includes(role.id));
		return roles.map(role => ({
			id:role.id,
			role:role.name,
		}));
	}

	setRoleToUserIdAndGuildId(userId = '473875604236664833', guildId = '81384788765712384') {

	}


}
const client = new Client();
Object.freeze(client);
module.exports = client;
