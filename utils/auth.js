const fetch = require('node-fetch');


module.exports = {
	getToken: async () => {
		const response = await fetch('https://discord.com/api/oauth2/token',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					client_id: '816305962901045278',
					client_secret: 'F8T2V5f74CRcEETO9SqHgIsu_8f4R-Dp',
					grant_type: 'client_credentials',
					scope: 'bot',
				}),
			});
		const { access_token } = await response.json();
		return access_token;

	},
};

