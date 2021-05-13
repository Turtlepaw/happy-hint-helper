const Discord = require('discord.js');

module.exports = {
    name: 'binary',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply('1. Copy the binary code\n2. Go to https://binarytotext.net/\n3. Paste the code\n4. Done, you should have your results!');
    }
}