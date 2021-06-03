const Discord = require('discord.js');

module.exports = {
    name: 'hint-step-2',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let server = client.config.server[interaction.guildID];
        let hintmsg = client.config.hints2[server];
        await interaction.reply(
            new Discord.MessageEmbed()
            .setTitle(`${hintmsg}`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
            );
    }
}