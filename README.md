# KitBot
[![Issues](https://img.shields.io/github/issues/Kitaminka/KitBot)](https://github.com/Kitaminka/KitBot/issues)
[![Stars](https://img.shields.io/github/stars/Kitaminka/KitBot)](https://github.com/Kitaminka/KitBot/stargazers)

Bot for my discord server.
___
### Installation and launching
- Install **[node.js](https://nodejs.org/)** to your computer.
- Clone repository to your computer.
- Open console in the copied repository.
- To complete the installation, write the following command in the console:
```console
npm install
```
- After installation, you will need to **[configure the bot](#bot-config)**. 
- To start the bot, write the following command in the console:
```console
npm start
```
___
### Bot config
- Create an app on the **[Discord Developer Portal](https://discord.com/developers/)**.
- Go to the **Bot** tab, create a bot and copy its token.
- Create a file **.env** and put your bot token in this file. Example of **.env** file you can see in the file **.env.example**.
- Open the **config.json** file using any text editor.
- This file contains general bot settings in the next format:

|Field name|Example value|Description|
|:---:|:---:|:---:|
|prefix|"!"|Prefix, which you need to write at command begin.|
|embedColor|"ff6940"|Bot embed message color.|
|welcomeChannel|"759521716241825873"|Channel ID, where the bot welcomes new members.|
|memeChannel|"784804599647305748"|Channel ID, where the bot sends random meme every hour.|
|adminRole|"759683325065166878"|Role ID, that is the server administrator role.|
|verificationRole|"772709949662035969"|Role ID, that is the verification role.|
|reactionMessages|["xd", "lmao", "ban"]|An array containing words that the bot will place reactions under.|
___
### Discord server
If you want to check bot functionality without installing and running it, you can join my **[Discord server](https://discord.gg/G3Dudc3)**.
___
