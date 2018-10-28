const Discord = require('discord.js');
const Winbot = new Discord.Client();

    // вход
Winbot.login(process.env.BOT_TOKEN);


Winbot.on('ready', () => {
    console.log('Готов работать!');
});

Winbot.on('message',(message) => {
if(message.content == "vk" ) {
    message.reply("Группа: https://vk.com/streamwin");
}
});
