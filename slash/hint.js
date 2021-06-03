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
            const embedd = new Discord.MessageEmbed()
            .setTitle(`${common}`)
            .setDescription(`You have ${common} correct characters`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
            await interaction.reply({ embeds: [ embedd ], ephemeral: true });
        }
        else
        {
            const embeddd = new Discord.MessageEmbed()
            .setTitle(`0 Correct characters!`)
            .setDescription(`You did not get any correct character!`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
            await interaction.reply({ embeds: [ embeddd ], ephemeral: true });
        }
    }
}
