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
        await interaction.reply('Your ticket has been recived!\nYou may get a reply in the next 24 hours', { ephemeral: true });
        const channel = client.channels.cache.get("841829345424834631");
        channel.send(embedd)
    }
}