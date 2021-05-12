const Discord = require('discord.js');

module.exports = {
    name: 'ordercheck',
    description: 'Gives a hint',
    async execute(client, interaction) {
        let guess = interaction.options[0].value;
        let good = client.config.hints[interaction.guildID]; //`nCpCjHAsr6`;
        var matched = 0;
        for (matched = good.length; matched >= 0; matched--) {
            let s = good.substr(0, matched);
            let t = guess.substr(0, matched);
            if (s === t) break;
        }
        await interaction.reply(`You have ${matched}/${good.length} in the right order`, { ephemeral: true });
    }
}


