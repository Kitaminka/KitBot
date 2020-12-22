const config = require('../../config.json');

module.exports = async (client) => {
    await client.user.setActivity(`${config.prefix}help`);
    console.log(`${client.user.username} started!`);
}