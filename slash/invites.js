const Discord = require('discord.js');

module.exports = {
    name: 'invites',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply('Server 1:https://discord.gg/hC3ZDVbe7V\nServer 2:https://discord.gg/nCpCjHAsr6\nServer 3:https://discord.gg/W8aVuDDgeV', { ephemeral: true });
    }
}