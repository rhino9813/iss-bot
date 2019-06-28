const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTkyOTYzMzgxMjcxNzI0MDYz.XRKm1w.rOvnNpMLUZxCVdoKcM4kqcBjmhs';

const PREFIX = '!';

bot.on('ready', () =>{
    console.groupCollapsed('Bot = Online');
    bot.user.setActivity('Ninja sleep', { type: 'Watching'}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "general");
    if(!channel)return;

    channel.send(`Welcome to the server ${member}!`)

});


bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" "); 

    switch(args[0]){
        case 'twitter':
            msg.channel.sendMessage('Ninja: https://twitter.com/Deal_IV\nDesire: https://twitter.com/DesirexHD');
            break;
        case 'website':
            msg.channel.sendMessage('https://www.ninjasmarketplace.com');
            break;
        case 'ikonik':
            msg.channel.sendMessage('Check out https://ninjasmarketplace.com/product/ikonik-service/ to buy ikonik!');
            break;
        case 'honor':
            msg.channel.sendMessage('Check out https://ninjasmarketplace.com/product/honor-guard-service/ to buy Honor Guard!');
            break;
        case 'wonder':
            msg.channel.sendMessage('Check out https://ninjasmarketplace.com/product/won-skin-service/ to buy the Wonder skin!');
            break;
        case 'purge':
            if(!msg.member.roles.find(r => r.name === "Moderator")) return msg.channel.send('You can\'t do that dummy. lol')
            if(!args[1]) return msg.channel.sendMessage('Please enter how many messages to be deleted.');
            msg.channel.bulkDelete(args[1]);
            break; 
        case 'userinfo':
            const Name = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', msg.author.username,true)
            .addField('Current Server', msg.guild.name,true)
            .setColor(0xF52F05)
            .setThumbnail(msg.author.avatarURL)
            .setFooter('I am broke')
            msg.channel.sendEmbed(Name)
            break;
        case 'help':
            const help = new Discord.RichEmbed()
            .setTitle('Help')
            .addField('Commands', 'My current commands are ban, kick, purge, website, ikonik, wonder, honor, and twitter.')
            .setColor(0xF52F05)
            .setThumbnail(msg.author.avatarURL)
            msg.channel.sendEmbed(help)
        break;   
        case 'kick':
            if(!msg.member.roles.find(r => r.name === "Moderator")) return msg.channel.send('You can\'t do that dummy. lol')
            const user = msg.mentions.users.first();

            if(user){
                const member = msg.guild.member(user);

                if(member){
                    member.kick('bye bye bot. L').then(() =>{
                        msg.channel.send(`Kicked ${member}`);
                    }).catch(err =>{
                        msg.channel.send('Unable to kick specified member');
                        consol.log(err);
                    });
                } else{
                    msg.channel.send('Error, please try again')
                } 
            } else {
                msg.channel.send('Error, please try again')
            }
        break;   
        case 'ban':
            if(!msg.member.roles.find(r => r.name === "Moderator")) return msg.channel.send('You can\'t do that dummy. lol')
            const user1 = msg.mentions.users.first();

            if(user1){
                const member = msg.guild.member(user1);

                if(member){
                    member.ban('bye bye bot. L').then(() =>{
                       msg.channel.send(`${member} has been banned. L`) 
                    }).catch(err =>{
                        msg.channel.send('Unable to ban specified member');
                        consol.log(err);
                    })
                    
                } else{
                    msg.channel.send('Error, please try again')
                } 
            } else {
                msg.channel.send('Error, please try again')
            }
        break; 
        case 'ping':
            if(!msg.member.roles.find(r => r.name === "Moderator")) 
                return msg.channel.send('You can\'t do that dummy. lol')
            msg.reply('pong')
        break;
        case 'nigga':
            msg.channel.send('https://www.youtube.com/watch?v=2ZIpFytCSVc')
        break;
    }
    
    if(msg.content === "Miami"){
        msg.reply('Miami is best MM');
    }
}) 

bot.login(token);

bot.login(process.env.BOT_TOKEN);
