const Discord = require('discord.js');

module.exports = {
    name: 'invites',
    description: 'Gives a hint',
    async execute(client, interaction) {
        const inviteem = new Discord.MessageEmbed()
        .setTitle(`Invites:`)
        .setDescription(`Here are all the invites!`)
        .addField('Server 1:', 'https://discord.gg/hC3ZDVbe7V')
        .addField('Server 2:', 'https://discord.gg/nCpCjHAsr6')
        .addField('Server 3:', 'https://discord.gg/W8aVuDDgeV')
        .setColor(client.confiig.color)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        await interaction.reply({ embeds: [ inviteem ], ephemeral: true });
    }
}