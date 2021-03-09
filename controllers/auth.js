const util = require('../utils/auth');
const request = require('request-promise');

module.exports = {
	login:async (req, res) => {
		return res.redirect(
			'https://discordapp.com/api/oauth2/authorize' +
			'?client_id=' + process.env.CLIENT_ID +
			'&redirect_uri=' +
			'http://localhost:5000/auth/discord_login_callback' +
			'&response_type=code' +
			'&scope=identify%20email%20guilds',
		);
	},
	loginCallback:async (req, res)=>{
		const code = req.query.code;
		const auth = await request({
			method: 'post',
			url: 'https://discordapp.com/api/oauth2/token',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			form: {
				code,
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				grant_type: 'authorization_code',
				redirect_uri: 'http://localhost:5000/auth/discord_login_callback',
				scope: 'identify email guilds',
			},
			json: true,
			simple: true,
		});
		// const request = await fetch(`https://discord.com/api/guilds/${guildId}`,
		// 	{
		// 		method: 'GET',
		// 		headers: {
		// 			'content-type': 'application/json',
		// 			authorization: `Bearer ${token}`,
		// 		},
		//
		// 	});
		// const res = await request.json();
		// console.log(res);
		// use that token to get the data of the user
		const GUILD_ID = '81384788765712384';
		const user = await request({
			method: 'get',
			url: `https://discord.com/api/guilds/${GUILD_ID}`,
			headers: {
				Authorization: 'Bearer ' + auth.access_token,
			},
			json: true,
			simple: true,
		});

		console.log({ user });

	},
	protected: async (req, res, next) => {
		const token = await util.getToken();
		console.log({ token });
		if (!token) {
			return next(res.json({
				message:'You are not login in to get access.',
				status:401,
			}));
		}
		next();
	},
};
