const Discord = require('discord.js');
const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'user',
    adminCommand: false,
    usage: `**${config.prefix}user**, **${config.prefix}user [user_ID]** или **${config.prefix}user [user_mention]**`,
    description: 'Display information about the user.',
    async execute(message, args) {
        let selectedMember, embed;
        if (!args[0]) {
            selectedMember = message.member;
        } else if (message.mentions.users.first()) {
            selectedMember = message.mentions.members.first();
        } else if (message.guild.members.cache.get(args[0])) {
            selectedMember = message.guild.members.cache.get(args[0]);
        }
        if (!selectedMember) {
            embed = await Embed.errorEmbed('The user could not be found.');
        } else {
            embed = new Discord.MessageEmbed()
                .setTitle(`:page_facing_up:User ${selectedMember.user.username} information`)
                .setThumbnail(selectedMember.user.displayAvatarURL({ format:'png', dynamic:true, size:4096, }))
                .setDescription('General information about the user.')
                .addField('User nickname', `${selectedMember.user.username}#${selectedMember.user.discriminator}`)
                .addField('User ID', selectedMember.user.id)
                .addField('User joined at', `${selectedMember.joinedAt.getUTCDate()}.${selectedMember.joinedAt.getUTCMonth()+1}.${selectedMember.joinedAt.getUTCFullYear()} ${selectedMember.joinedAt.getUTCHours()}:${selectedMember.joinedAt.getUTCMinutes()}:${selectedMember.joinedAt.getUTCSeconds()} UTC`)
                .addField('User account created at', `${selectedMember.user.createdAt.getUTCDate()}.${selectedMember.user.createdAt.getUTCMonth()+1}.${selectedMember.user.createdAt.getUTCFullYear()} ${selectedMember.user.createdAt.getUTCHours()}:${selectedMember.user.createdAt.getUTCMinutes()}:${selectedMember.user.createdAt.getUTCSeconds()} UTC`)
                .addField('Highest user role', selectedMember.roles.highest)
                .setTimestamp()
                .setColor(config.embedColor);
        }
        return message.channel.send(embed);
    }
};