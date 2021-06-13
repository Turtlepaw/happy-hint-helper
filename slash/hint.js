const Discord = require('discord.js');
const commandsss = require('../models/commands')
const config = require('../config.json')

module.exports = {
    name: 'hint',
    description: 'Says how many characters are correct!',
    async execute(client, interaction) {
        let guess = interaction.options[0].value;
        let good = config.hints[interaction.guildID];
        let guessArray = guess.split('');
        let goodArray = good.split('');
        let common = 0;
        for (let index = 0; index < Math.min(guessArray.length, goodArray.length); index++) {
            if (guessArray[index] === goodArray[index])
                common++;
            else
                break;
        }
        ///
        let cmdsa = await commandsss.findOne({
            user: interaction.user.id
        });
    
        if (!cmdsa) {
            cmdsa = new commandsss({
                user: interaction.user.id,
                uses: 0,
                guess: guess,
            });
            await cmdsa.save().catch(e => console.log(e));
        };
        await commandsss.findOne({
            user: interaction.user.id
        }, async (err, dUser) => {
            if (err) console.log(err);
            dUser.uses += 1;
            await dUser.save().catch(e => console.log(e));
        });
        ///
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
