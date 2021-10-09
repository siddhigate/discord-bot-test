require('dotenv').config(); 
const Discord = require('discord.js');

const client = new Discord.Client(); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {

  switch (msg.content) {
    case "hi":
      msg.reply("bye");
      break;

    case "bye":
      msg.reply("leave");
      break;
   }
})

client.login(process.env.TOKEN); 