const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    errorEmbed(errorText) {
        return new Discord.MessageEmbed()
            .setTitle(':x:Error')
            .setDescription(errorText)
            .setTimestamp()
            .setColor(config.embedColor);
    },
    commandInfo(command) {
        let commandStatus;
        if (command.adminCommand) commandStatus = 'Да';
        else commandStatus = 'Нет';

        return new Discord.MessageEmbed()
            .setTitle(`:page_facing_up:Command ${config.prefix + command.name} description`)
            .setDescription(command.description)
            .addField('Requires administrator role:', commandStatus)
            .addField('Usage:', command.usage)
            .setTimestamp()
            .setColor(config.embedColor);
    },
    defaultEmbed(title, description) {
        return new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setTimestamp()
            .setColor(config.embedColor);
    }
}
