const Discord = require('discord.js');
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'restart',
    description: 'Gives a hint',
    async execute(client, interaction) {
        const rstart = new Discord.MessageEmbed()
        .setTitle(`Restarting...`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color)
        await interaction.reply({ embeds: [ rstart ], ephemeral: true });
        await wait(1000)
        const donee = new Discord.MessageEmbed()
        .setTitle(`Restarted ✅`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color)
        await interaction.editReply({ embeds: [ donee ], ephemeral: true })
        setTimeout(() =>
        {  process.exit(); }, 3000);
    }
}