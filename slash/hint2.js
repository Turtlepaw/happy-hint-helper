const Discord = require('discord.js');

module.exports = {
    name: 'hint-step-2',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let server = client.config.server[interaction.guildID];
        let hintmsg = client.config.hints2[server];
        await interaction.reply(`${hintmsg}`);
    }
}