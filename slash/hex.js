const Discord = require('discord.js');

module.exports = {
    name: 'hex',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply(
            new Discord.MessageEmbed()
            .setTitle(`Converting Hex`)
            .addField('Step 1', 'Copy the hex code')
            .addField('Step 2', 'Go to [here](https://onlinehextools.com/convert-hex-to-text)')
            .addField('Step 3', 'Paste the code')
            .addField('Step 4', 'Done, you should have your results!')
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
        );
    }
}