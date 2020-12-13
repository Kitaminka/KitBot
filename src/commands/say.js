const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'say',
    adminCommand: true,
    usage: `**${config.prefix}say [some text]**`,
    description: 'Display a message on behalf of the bot.',
    async execute(message, args) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (!args[0]) return message.channel.send(Embed.errorEmbed('You have not specified the message to send.'));
        if (message.deletable) message.delete();
        return message.channel.send(args.join(' '));
    }
};