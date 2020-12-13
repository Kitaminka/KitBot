const Discord = require('discord.js');
const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'avatar',
    adminCommand: false,
    usage: `**${config.prefix}avatar**, **${config.prefix}avatar [user_ID]** или **${config.prefix}avatar [user_mention]**`,
    description: 'Display the user\'s avatar.',
    async execute(message, args) {
        let selectedUser, embed;
        if (!args[0]) {
            selectedUser = message.author;
        }
        else if (message.mentions.users.first()) {
            selectedUser = message.mentions.users.first();
        }
        else if (message.guild.members.cache.get(args[0])) {
            selectedUser = message.guild.members.cache.get(args[0]).user;
        }

        if (!selectedUser) {
            embed = Embed.errorEmbed('User not found.');
        }
        else {
            embed = new Discord.MessageEmbed()
                .setTitle(`:bust_in_silhouette:${selectedUser} user avatar`)
                .setImage(selectedUser.displayAvatarURL({ format:'png', dynamic:true, size:4096, }))
                .setTimestamp()
                .setColor(config.embedColor);
        }

        return message.channel.send(embed);
    }
};