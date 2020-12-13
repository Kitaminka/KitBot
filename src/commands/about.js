const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'about',
    adminCommand: true,
    usage: `**${config.prefix}about**`,
    description: 'Display server information and useful links.',
    async execute(message) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (message.deletable) message.delete();

        const rulesEmbed = new Discord.MessageEmbed()
            .setTitle(':exclamation:Rules')
            .setDescription('By using this server you agree to the following rules:')
            .addField('Discord Terms of Service','https://discord.com/terms')
            .addField('Discord Community Guidelines', 'https://discord.com/guidelines')
            .setColor(config.embedColor);

        const linkEmbed = new Discord.MessageEmbed()
            .setTitle(':link:Links')
            .setDescription('Useful links:')
            .addField('My Steam account', 'https://steamcommunity.com/id/kitaminka')
            .addField('My GitHub', 'https://github.com/Kitaminka')
            .addField('Server invite','https://discord.gg/G3Dudc3')
            .setColor(config.embedColor);

        return message.channel.send(rulesEmbed).then( () => {message.channel.send(linkEmbed)});
    }
};