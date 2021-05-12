module.exports = {
    name: 'register2',
    description: '-',
    async execute(message, Member, args) {
        const client = message.client
        if (!client.application?.owner) await client.application?.fetch();
//https://discord.com/oauth2/authorize?client_id=841782635386109972&scope=bot+applications.commands
        const data = {
            name: 'hint',
            description: 'Says how many characters are correct',
            options: [{
				name: 'guess',
				type: 'STRING',
				description: 'Your guess',
				required: true,
			}],
        };

        const command = await client.application?.commands.create(data);
        console.log(command);
    }
}