const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'coin',
    adminCommand: false,
    usage: `**${config.prefix}coin**`,
    description: 'Flip a coin.',
   async execute(message) {
        let embed;
        if (Math.round(Math.random()) === 0) {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Eagle fell!')
                .setThumbnail('https://i.imgur.com/35Vdrxy.png')
                .setTimestamp()
                .setColor(config.embedColor);
        } else {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Tails fell!')
                .setThumbnail('https://i.imgur.com/PYPK3PD.png')
                .setTimestamp()
                .setColor(config.embedColor);
        }
        return message.channel.send(embed);
    }
};