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
        interaction.channel.send(embedd)
        .then((edittthis) => {
            edittthis.react('✅')
            edittthis.react('❎')
            client.on('messageReactionAdd', async (reaction, user) => {
                if (user.bot) {
                    return
                }
                if (reaction.emoji.name === '✅') {
                    interaction.user.send(`Your ticket has been approved`)
                }
                if (reaction.emoji.name === '❎') {
                    interaction.user.send(`Your ticket has been denied`)
                }
            })
        });        
        await interaction.reply('Your ticket has been recived!\nYou may get a reply in the next 24 hours', { ephemeral: true });

    }
}