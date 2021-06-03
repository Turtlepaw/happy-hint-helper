const Discord = require('discord.js');

module.exports = {
    name: 'binary',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply(
        new Discord.MessageEmbed()
        .setTitle(`Converting Binary`)
        .addField('Step 1', 'Copy the binary code')
        .addField('Step 2', 'Go to [here](https://binarytotext.net/)')
        .addField('Step 3', 'Paste the code')
        .addField('Step 4', 'Done, you should have your results!')
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor(client.confiig.color));
    }
}