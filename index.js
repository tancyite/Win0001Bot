const Discord = require('discord.js');
const Winbot = new Discord.Client();

    // вход
Winbot.login(process.env.NTA1OTUzODQ4ODU5Mjk1NzQ1.DrbF1A.BVhUWiWiySW7a2UeQHMHuWOkh4s);


Winbot.on('ready', () => {
    console.log('Готов работать!');
});

Winbot.on('message',(message) => {
if(message.content == "vk" ) {
    message.reply("Группа: https://vk.com/streamwin");
}
});
