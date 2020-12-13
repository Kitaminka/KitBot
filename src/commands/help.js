const Discord = require('discord.js');
const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'help',
    adminCommand: false,
    usage: `**${config.prefix}help** или **${config.prefix}help [command_name]**`,
    description: 'Display list all available commands.',
    async execute(message, args, client) {
        let embed;
        if (!args[0]) {
            embed = new Discord.MessageEmbed()
                .setTitle(':robot:Command list')
                .setDescription(`To get information about a specific command, write !help [commandName]. Full list of commands for this bot:`)
                .setTimestamp()
                .setColor(config.embedColor);
            for (const command of client.commands) {
                if (command[1].adminCommand && message.member.roles.cache.get(config.adminRole)) {
                    embed['fields'].push({
                        name: config.prefix + command[1].name,
                        value: command[1].description,
                        inline: false,
                    });
                } else if (!command[1].adminCommand) {
                    embed['fields'].push({
                        name: config.prefix + command[1].name,
                        value: command[1].description,
                        inline: false,
                    });
                }
            }
        } else {
            if (!client.commands.has(args[0])) {
                embed = Embed.errorEmbed('The command you entered doesn\'t exist.');
            } else {
                embed = Embed.commandInfo(client.commands.get(args[0]));
            }
        }
        return message.channel.send(embed);
    }
};