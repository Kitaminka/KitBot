const Discord = require('discord.js');
const unirest = require('unirest');
const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'ipinfo',
    adminCommand: false,
    usage: `**${config.prefix}ipinfo [IP_address]**`,
    description: 'Display information about the IP address.',
    async execute(message, args) {
        let embed;
        if (!args[0]) return message.channel.send(await Embed.errorEmbed('You didn\'t specify an IP address.'));
        else {
            const req = unirest('GET', `http://ipwhois.app/json/${args[0]}`);

            req.end( async (res) => {
                if (res.error) throw res.error;
                const ipInfo = res.body;

                if (ipInfo.success) {
                    embed = new Discord.MessageEmbed()
                        .setTitle(`:page_facing_up:IP address ${args[0]} information`)
                        .setDescription('General information about the IP address.')
                        .addField('IP address type', ipInfo.type)
                        .addField('Country', ipInfo.country)
                        .addField('City', ipInfo.city)
                        .addField('Latitude', ipInfo.latitude)
                        .addField('Longitude', ipInfo.longitude)
                        .setTimestamp()
                        .setColor(config.embedColor);
                } else {
                    embed = await Embed.errorEmbed('An error occurred. You may have entered the wrong IP address.');
                }
                return message.channel.send(embed);
            });
        }
    }
};