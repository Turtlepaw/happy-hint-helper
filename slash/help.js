const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows a list of / commands',
    async execute(client, interaction) {
        const helpp = new Discord.MessageEmbed()
        .setTitle(`\`/\` Commands`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color)
        const { slashcmds } = client;
        slashcmds.forEach(cmd => {
            helpp.addField(cmd.name, cmd.description);
        });
        await interaction.reply(helpp);
    }
}