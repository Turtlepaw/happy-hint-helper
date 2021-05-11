const Discord = require('discord.js');

module.exports = {
  name: 'help',
  category: 'Info',
  description: 'Server info',
  execute(message, Member, args) {
    message.delete();
    const turtlebot = message.client.emojis.cache.find(em => em.name === "Turtlebot");
    const nodejs = message.client.emojis.cache.find(em => em.name === "Nodejs");
    const helpEmbed = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle(`Here's a list of all my commands!`)
        .setDescription(`${message.author.username} used !help`)
        .setThumbnail(turtlebot.url)
        .addField('1️⃣ All')
        .addField('If you see a problem notify my developers **Turtlepaw#5377**', 'You can use the ,problem command to submit an issue using turtlebot')
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