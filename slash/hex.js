const Discord = require('discord.js');

module.exports = {
    name: 'hex',
    description: 'Gives a hint',
    async execute(client, interaction) {
        await interaction.reply('1. Copy the hex code\n2. Go to https://onlinehextools.com/convert-hex-to-text\n3. Paste the code\n4. Done, you should have your results!');
    }
}