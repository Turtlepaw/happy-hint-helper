const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply('Pong!', { ephemeral: true });
    }
}
