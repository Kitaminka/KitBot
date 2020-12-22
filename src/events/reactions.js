const config = require('../../config.json');

module.exports = async (client, message) => {
    if (!message.member.roles.cache.has(config.legendRole)) return;
    const content = message.content.toLowerCase();
    if (config.reactionMessages.indexOf(content) === -1) return;

    for (const symbol of content) {
        const reactionEmoji = client.emojis.cache.find(emoji => emoji.name === `${symbol}_letter`);
       try {
            await message.react(reactionEmoji);
        } catch {
           return;
       }
    }
}