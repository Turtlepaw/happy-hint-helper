const Discord = require('discord.js');
const emojii = require('../models/commands')
const config = require('../config2.json')

module.exports = {
    name: 'stats',
    description: 'Gives a hint for step 1',
    async execute(client, interaction) {
        if(interaction.user.id === config.hosts){
        let server = client.config.server[interaction.guildID];
        let hintmsg = client.config.hints1[server];

        const docs = await emojii.find().limit(10).sort({ 'uses': -0 })

        const replyembed = new Discord.MessageEmbed()
        .setTitle(`${docs.length} Commands Used`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color)
        docs.forEach(c => {
            const userr = client.users.cache.get(c.user)
            replyembed.addField(`${userr.username}`, `${c.uses} Uses`);
          });
        await interaction.reply({ embeds: [replyembed], ephemeral: true });
        } else {
            const nopeembed = new Discord.MessageEmbed()
            .setTitle('You do not have permission!')
            .setColor('RED')
            interaction.reply({ embeds: [nopeembed], ephemeral: true })
        }
    }
}