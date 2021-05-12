const Discord = require('discord.js');

module.exports = {
  name: 'setup',
  category: 'Info',
  description: 'Server info',
  execute(message, Member, args) {
    message.delete();
    const helpEmbed = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle(`Here's a list of all my commands!`)
        .addField('1️⃣ All')
        .setTimestamp()
        .setFooter('Happy Hint Helper Discord.Javascript', nodejs.url);
      const helpEmbede = new Discord.MessageEmbed()
      .setColor('AQUA')
      .setTitle("Here\'s a list of all my commands:")
      .setThumbnail(turtlebot.url);
      const { commands } = message.client;
      const { config } = message.client;
      commands.forEach(cmd => {
        helpEmbede.addField(cmd.name, cmd.description);
      });

      helpEmbed
      .addField('If you see a problem notify my developers **Turtlepaw#5377**')
      .setTimestamp()
      .setFooter('Happy Hint Helper Discord.Javascript', nodejs.url);
    message.channel.send(helpEmbed).then((editthis) => {
      editthis.react('1️⃣')
      editthis.react('🗑')
      message.client.on('messageReactionAdd', async (reaction, user) => {
        if (user.bot) {
          return
        }
        if (reaction.emoji.name === '1️⃣') {
          editthis.edit(helpEmbede);   
        }
        if (reaction.emoji.name === '🗑') {
            editthis.delete(); 
          }
        message.client.on('messageReactionRemove', async (reaction, user) => {
          if (user.bot) {
            return
          }
          if (reaction.emoji.name === '1️⃣') {
            editthis.edit(helpEmbed);
          }

        }
        );
      })
    })
  }
}