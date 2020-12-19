const Discord = require('discord.js');
const Canvas = require('canvas');
const config = require('../../config.json');

module.exports = async (member) => {
    if (member.user.bot) return;

    member.roles.add(config.verificationRole);

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    Canvas.registerFont('./public/fonts/impact.ttf', { family: 'Impact' });

    const background = await Canvas.loadImage('./public/img/background.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '50px "Impact"';
    ctx.fillStyle =  '#fff';
    ctx.fillText('Welcome,', canvas.width / 2.8, canvas.height / 2.3);
    ctx.font = '30px "Impact"';
    ctx.fillText(`${member.user.username}!`, canvas.width / 2.8, canvas.height / 1.5);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size:4096, }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const embed = new Discord.MessageEmbed()
        .setTitle(':wave:Welcome!')
        .setDescription(`Welcome to the server, ${member}. I hope you enjoy it here.`)
        .attachFiles([new Discord.MessageAttachment(canvas.toBuffer(), 'welcome_image.png')])
        .setFooter('To complete the verification, click the reaction below', 'https://i.imgur.com/DyWlZOU.png')
        .setImage('attachment://welcome_image.png')
        .setTimestamp()
        .setColor(config.embedColor);

    const welcomeMessage = await member.guild.channels.cache.get(config.welcomeChannel).send(embed);
    await welcomeMessage.react('✅');

    const filter = (reaction, user) => {
        return '✅'.includes(reaction.emoji.name) && user.id === member.user.id;
    };

    welcomeMessage.awaitReactions(filter, { max: 1, time: 300000, errors: ['time'] })
        .then( () => {
            const editedMessage = new Discord.MessageEmbed()
                .setTitle(':wave:Welcome!')
                .setDescription(`Welcome to the server, ${member}. I hope you enjoy it here.`)
                .attachFiles([new Discord.MessageAttachment(canvas.toBuffer(), 'welcome_image.png')])
                .setFooter('Verification completed successfully', 'https://i.imgur.com/DyWlZOU.png')
                .setImage('attachment://welcome_image.png')
                .setTimestamp()
                .setColor(config.embedColor);

            member.roles.remove(config.verificationRole);
            welcomeMessage.edit(editedMessage);
            welcomeMessage.reactions.removeAll();
        })
        .catch( () => {
            welcomeMessage.delete();
            if (member) member.kick('Verification didn\'t complete within 5 minutes');
        });
}