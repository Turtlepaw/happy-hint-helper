const Discord = require('discord.js');
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: 'ping',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply(`🏓 Pinging....`);
        await wait(1000);
        const msg = await interaction.fetchReply();
        const embeddd = new Discord.MessageEmbed()
        .setTitle(`Pong! 🏓`)
        .setDescription(`Latency is ${Math.floor(msg.createdTimestamp - interaction.createdTimestamp)}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`)
        .setColor(client.confiig.color)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        await interaction.editReply("\u200B")
        await wait(10)
        await interaction.editReply(embeddd)
    }
}