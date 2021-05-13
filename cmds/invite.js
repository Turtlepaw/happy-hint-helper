const Discord = require('discord.js');

module.exports = {
    name: 'invites',
    description: 'Generates an invite for your server',
    async execute(message, Member, args) {
        message.delete();
        let invite = await message.channel.createInvite({
            maxAge: 0, // 0 = infinite expiration
            maxUses: 0 // 0 = infinite uses
          }).catch(console.error)
        message.channel.send(`Creating....`).then((editthis) => {
            setTimeout(() =>
            {  editthis.edit(`Here's an invite for ${message.guild.name}! ${invite}`) }, 1000);
    });
},
};