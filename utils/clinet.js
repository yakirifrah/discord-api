const Discord = require('discord.js');


class Client {
	constructor() {
		if (Client.instance == null) {
			this.client = new Discord.Client();
			Client.instance = this;
		}
		return Client.instance;
	}

	async getRoles(userId = '473875604236664833', guildId = '811211435979440178') {
		// const user = this.client.user;
		const guildMembers = this.client.guilds.cache.get('811211435979440178');
		const roles = guildMembers.members.cache.get(userId).roles.cache;
		console.log('############');
		console.log(roles);

	}


	setRoleToUserIdAndGuildId(userId = '473875604236664833', guildId = '81384788765712384') {

	}


}
const client = new Client();
Object.freeze(client);
module.exports = client;
