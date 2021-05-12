const Discord = require('discord.js');

module.exports = {
    name: 'order',
    description: 'Gives a hint',
    execute(message, Member, args) {
        let guess = args[0]
        let good = `nCpCjHAsr6`;
        let guessChars = guess.split('');
        let goodChars = good.split('');
        const intersection = goodChars.filter(value=>guessChars.includes(value));
        var matched = 0;
        for (matched = good.length; matched >= 0;  matched--)
        {
            let s = good.substr(0,matched);
            let t = guess.substr(0,matched);
            if (s === t) break;
        }
        message.channel.send(`You have ${matched}/${good.length} in the right order`)
    },
    
};