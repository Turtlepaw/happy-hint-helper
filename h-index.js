const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');

//const keyv = new Keyv('sqlite:react.sqlite');
//keyv.on('error', err => console.error('Keyv connection error:', err));
// at the beginning of your code:
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_INTEGRATIONS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"],
    

    presence: {
        status: 'online',
        activities: [ { name: `/hint`, type: 'PLAYING'}],       }
    });
const roleName = '2 Month Supporter';

//client.snipes = new Discord.Collection();


//Slash commands =>

client.on('interaction', async interaction => {
    let guess = interaction.options[0].value;
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
	if (interaction.commandName === 'ordercheck') await interaction.reply(`You have ${matched}/${good.length} in the right order`, { ephemeral: true });
});

//Slash commands <=

//Slash commands =>

client.on('interaction', async interaction => {
	if (!interaction.isCommand()) return;
    let guess = interaction.options[0].value;
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
	if (interaction.commandName === 'hint') await interaction.reply(`You have ${intersection.length-1} correct characters`, { ephemeral: true });
});

//Slash commands <=

//Slash commands =>

client.on('interaction', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'ping') await interaction.reply('Pong!', { ephemeral: true });
});
// client.on('interaction', async interaction => {
// 	if (!interaction.isCommand()) return;
// 	if (interaction.commandName === 'ping') await interaction.reply('Pong!', { ephemeral: true });
// });
//Slash commands <=

client.once('ready', () => {
    console.log(`I'm Ready!`);
});

client.commands = new Discord.Collection();
client.giveaways = new Discord.Collection();
client.config = config;

const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

// Here we load all the commands into client.commands
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    console.log(`loading cmds/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}
// Client events
client.on('message', message => {
    //if(message.content.startsWith(`${prefix}tpwhois`)){
    var Member;
    var status;
    var differentDays = 0;
    if (message.mentions.members) {
        Member = message.mentions.members.first()
        if (!Member) {
            Member = message.member
        }
        // status = Member.presence.status
    }

    if (status == "dnd") {
        var status = "Do not Disturb"
    }
    if (Member) {
        var joinedSince = new Date() - Member.joinedAt
        differentDays = Math.round(joinedSince / (1000 * 3600 * 24));
    }
    message.differentDays = differentDays;
    const opps = message.client.emojis.cache.find(em => em.name === "ablobglitch");
    if (message.content.startsWith(config.prefix) && !message.author.bot) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        if (!command) {
            message.reply(`Sorry i don't think ${commandName} is possible ${opps}`);
        }
        else {
            try {
                command.execute(message, Member, args);
            } catch (error) {
                console.error(error);
                message.reply(`Something went very wrong ${opps}`);
            }
        }
    }


});


client.login(config.token);
//client.user.setActivity('-help');