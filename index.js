const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
	]
 });

client.once('ready', () => {
	console.log('Bot online!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');

	} else if (commandName === 'server') {
		let isAvaliable = ':no_entry_sign:';
		if (interaction.guild.available) isAvaliable = ':white_check_mark:';

		await interaction.reply(
			`Nome do servidor: **${interaction.guild.name}**\n` +
			`Quantidade de membros: **${interaction.guild.memberCount}**\n` +
			`Se é cessível: **${isAvaliable}**\n` +
			`Data de criação: **${interaction.guild.createdAt}**`
		);

	} else if (commandName === 'user') {
		await interaction.reply(
			`Usuário: **${interaction.user.tag}**\n` +
			`Id: **${interaction.user.id}**`
		);
		
	} else if (commandName === 'avatar') {
		await interaction.reply(`Avatar:\n${interaction.user.avatarURL()}`);
	}
	
});








client.login(token);