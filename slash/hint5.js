const Discord = require('discord.js');

module.exports = {
    name: 'hint-step-1',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let server = client.config.server[interaction.guildID];
        let hintmsg = client.config.hints5[server];
        await interaction.reply(`${hintmsg}`);
    }
}