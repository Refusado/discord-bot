const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com "Pong!"'),

	new SlashCommandBuilder()
        .setName('server')
        .setDescription('Responde com informações do servidor'),

	new SlashCommandBuilder()
        .setName('user')
        .setDescription('Responde com informações do usuário'),

	new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Retorna o seu avatar'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
