module.exports = async (client) => {
    client.once('ready', async () => {
        await require('../events/init')(client);
    });
    client.on('message', async (message) => {
        await require('../events/executeCommand')(client, message);
        await require('../events/reactions')(client, message);
    });
    client.on('guildMemberAdd', async (member) => {
        await require('../events/welcome')(member);
    });
    client.setInterval( async () => {
        await require('../events/updateMemberCount')(client);
    }, 300000, client)
    client.setInterval(async () => {
        await require('../events/randomMeme')(client);
    }, 3600000, client);
}