const Discord = require('discord.js');

module.exports = {
    name: 'register',
    description: 'register me because you are my remedy',
    async execute(message, Member, args) {
        const client = message.client
        if (!client.application?.owner) await client.application?.fetch();
//https://discord.com/oauth2/authorize?client_id=841782635386109972&scope=bot+applications.commands
        const data = {
            name: 'ping',
            description: 'Replies with Pong!',
        };

        const command = await client.guilds.cache.get('841737708825215047')?.commands.create(data);
        console.log(command);
    }
}