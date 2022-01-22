const {
    Client,
    Intents
} = require('discord.js');

const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} is logged in!`);
});

bot.on('guildMemberAdd', (member) => {
    const channelId = '930970077086498886'; // The Channel ID you just copied
    const welcomeMessage = `Добро пожаловать на наш сервер, <@${member.id}>! Обязательно прочитай <#921960551024840704>!`;
    const welcomeRole = '934322645137252383';
    member.guild.channels.fetch(channelId).then(channel => {
        channel.send(welcomeMessage)
        
    });
    console.log(member)
    member.roles.add(welcomeRole)
});

bot.login('OTM0MzAzMTU3MTgwMzA5NTI0.YeuHnw.j_h1H8dM1x53VuOVDVJ6Rfj26FQ'); // Replace the macro with your token