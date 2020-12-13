const config = require('../../config.json');
const Images = require('../modules/images.js');

module.exports = {
    name: 'rimg',
    adminCommand: false,
    usage: `**${config.prefix}rimg**`,
    description: 'Display a random image from the service https://prnt.sc/.',
    async execute(message) {
        await Images.randomImage(message);
    }
};