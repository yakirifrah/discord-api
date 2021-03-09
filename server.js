const dotenv = require('dotenv');

dotenv.config({ path:'./config.env' });
const { client } = require('./utils/clinet');

client.on('ready', ()=>{
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', (e)=>console.error(e));
client.on('warn', (e)=>console.warn(e));
client.on('debug', (e)=>console.info(e));

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login(process.env.BOT_TOKEN).then(() => console.log('login successful!'));


const app = require('./app');

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});

