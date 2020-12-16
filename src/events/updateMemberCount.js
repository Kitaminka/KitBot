const config = require('../../config.json');

module.exports = async (client) => {
    client.channels.cache.get(config.memberChannel).edit({name:`Members: ${client.channels.cache.get(config.memberChannel).guild.memberCount}`})
}