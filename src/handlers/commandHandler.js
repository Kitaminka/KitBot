const Discord = require('discord.js')
const fs = require('fs');

module.exports = (client) => {
    client.commands = new Discord.Collection();

    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
    }
}