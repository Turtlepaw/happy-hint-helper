const Discord = require('discord.js');

module.exports = {
    name: 'hint-step-1',
    description: 'Gives a hint for step 1',
    async execute(client, interaction) {
        let server = client.config.server[interaction.guildID];
        let hintmsg = client.config.hints1[server];
        await interaction.reply(
            new Discord.MessageEmbed()
            .setTitle(`${hintmsg}`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
            );
    }
}