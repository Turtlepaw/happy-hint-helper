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
        //await interaction.reply(`You have ${matched}/${good.length} in the right order`, { ephemeral: true });
            const embedd = new Discord.MessageEmbed()
            .setTitle(`${matched}/${good.length}`)
            .setDescription(`You have ${matched}/${good.length} in the right order`)
            .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setColor(client.confiig.color)
            await interaction.reply({ embeds: [ embedd ], ephemeral: true });
    }
}


