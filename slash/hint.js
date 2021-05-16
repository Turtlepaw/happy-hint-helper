const Discord = require('discord.js');

module.exports = {
    name: 'hint',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let guess = interaction.options[0].value;
        let good = client.config.hints[interaction.guildID]; //`nCpCjHAsr6`;
        let guessArray = guess.split('');
        let goodArray = good.split('');
        let common = 0;
        for (let index = 0; index < Math.min(guessArray.length, goodArray.length); index++) {
            if (guessArray[index] === goodArray[index])
                common++;
            else
                break;
        }
        let index = good.indexOf(guess);
        if (common >= 0)
        {
            await interaction.reply(`You have ${common} correct characters`, { ephemeral: true });
        }
        else
        {
            await interaction.reply(`Not a single correct character`, { ephemeral: true });
        }
    }
}
