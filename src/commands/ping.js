const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'ping',
    adminCommand: false,
    usage: `**${config.prefix}ping**`,
    description: 'Display bot ping',
    async execute(message) {
        let embed = new Discord.MessageEmbed()
            .setTitle('Pinging...')
            .setColor(config.embedColor);
        message.channel.send(embed).then(res => {
            const ping = res.createdTimestamp - message.createdTimestamp;

            embed = new Discord.MessageEmbed()
                .setTitle(':ping_pong:Pong!')
                .setDescription(`Bot ping is ${ping}ms!`)
                .setTimestamp()
                .setColor(config.embedColor);

            return res.edit(embed);
        });
    }
};