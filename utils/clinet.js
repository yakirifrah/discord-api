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
		// const myRole = guildMembers.roles.cache.get(roleIDs[0]).name;


		// const roles = guildMembers.members.cache.get(userId).roles.cache.filter(role => role.id === roleIDs[0]);
		// console.log('############');
		// console.log(roles);

	}
	setRoleToUserIdAndGuildId(userId = '473875604236664833', guildId = '81384788765712384') {

	}


}
const client = new Client();
Object.freeze(client);
module.exports = client;
