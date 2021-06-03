const Discord = require('discord.js');

module.exports = {
    name: 'ticket',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let msgg = interaction.options[0].value;
        const embedd = new Discord.MessageEmbed()
        .setTitle(`Ticket!`)
        .setAuthor(`Ticket from ${interaction.user.tag} | ${interaction.user.id}`, interaction.user.displayAvatarURL())
        .addField(`${msgg}`, `Users sent message`)
        .setColor("AQUA")
        .setTimestamp()
        const channel = client.channels.cache.get("841829345424834631");
        channel.send(embedd)
        .then((edittthis) => {
            edittthis.react('✅')
            edittthis.react('❎')
            client.on('messageReactionAdd', async (reaction, user) => {
                if (user.bot) {
                    return
                }
                if (reaction.emoji.name === '✅') {
                    interaction.user.send(
                        new Discord.MessageEmbed()
                        .setTitle(`Your ticket has been approved!`)
                        .addField(`Your Message:`, `${msgg}`)
                        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
                        .setColor(client.confiig.color)
                    )
                }
                if (reaction.emoji.name === '❎') {
                    interaction.user.send(
                    new Discord.MessageEmbed()
                    .setTitle(`Your ticket has been denied`)
                    .addField(`Your Message:`, `${msgg}`)
                    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
                    .setColor(client.confiig.color)
                    )
                }
            })
        });        
        const sent = new Discord.MessageEmbed()
        .setTitle(`Your ticket has been recived!`)
        .addField(`Your Message:`, `${msgg}`)
        .setDescription(`You may get a reply in the next 24 hours!`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color)
        await interaction.reply({ embeds: [ sent ], ephemeral: true });

    }
}