const Discord = require('discord.js');

module.exports = {
    name: 'hint',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let guess = interaction.options[0].value;
        let good = client.config.hints[interaction.guildID]; //`nCpCjHAsr6`;
        let index = good.indexOf(guess);
        if (index >= 0)
        {
            await interaction.reply(`You have ${guess.length} correct characters`, { ephemeral: true });
        }
        else
        {
            await interaction.reply(`Not a single correct character`, { ephemeral: true });
        }
    }
}
