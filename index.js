// Require the necessary discord.js classes
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();
const express = require('express');
const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas');
const canvafy = require("canvafy");
const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest');
const config = require('./config');


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const rest = new REST({ version: '9' }).setToken(config.Botconfig.token);

client.once('ready', () => {
  console.clear();
  console.log('\x1b[34m%s\x1b[0m', `Logged in as ${client.user.tag}`);

  client.user.setPresence({
    activities: [{ name: config.Presence.activity, type: config.Presence.type }],
    status: config.Presence.status.toLowerCase(),
  });
});
  

client.on("guildMemberAdd", async member => {
  try {
    const guild = member.guild;
    const channel = await guild.channels.fetch(config.Botconfig.welcomeChannelID);
    if (!channel) {
      console.error("Welcome channel not found.");
      return;
    }

    const welcome = await new canvafy.WelcomeLeave()
      .setAvatar(member.user.displayAvatarURL({ forceStatic: true, extension: "png" }))
      .setBackground("image", config.Image.background)
      .setTitle("Welcome!", config.Image.titleMessageColor)
      .setDescription(config.Image.welcomeDescription, config.Image.descriptionColor)
      .setBorder(config.Image.bordercolor)
      .setAvatarBorder(config.Image.avatarbordercolor)
      .build();

    const guildname = guild.name;
    const welcomeMessage = `Welcome to ${guildname}, <@${member.id}>! 

    We're excited to have you join our community! Before you begin, please follow these steps:

    ➣ **Read the Rules**: Familiarize yourself with our community guidelines and regulations here <#1088032924869349409> .
    ➣ **Choose Your Role**: To access all server features, including exclusive channels and events, select your role in the <#1091200958337396737> .
    ➣ **Say Hi**: Introduce yourself in the <#1088037928091009095> . We'd love to get to know you better!
  
    By following these steps, you'll have a smooth start in our community and can fully enjoy your time with us. 🚀`;

    const developerbutton = new ButtonBuilder()
      .setLabel('Oh!BOTLiST')
      .setURL('https://ohbotlist.hop.sh/')
      .setStyle(ButtonStyle.Link);


    const actionRow = new ActionRowBuilder().addComponents(developerbutton);


    channel.send({
      content: welcomeMessage,
      files: [{
        attachment: welcome,
        name: `welcome-${member.id}.png`
      }],
      components: [actionRow]
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("guildMemberRemove", async member => {
  const chx = (config.Botconfig.farewellChannelID); // Ganti dengan ID channel yang ingin Anda gunakan.
  if (chx === null) {
      return;
  }

  // Daftar nama file gambar PNG yang Anda miliki
  const images = [
    "1a.png",
    "2a.png",
    "3a.png",
    "4a.png",
    "5a.png",
    "6a.png",
    "7a.png",
    "8a.png",
    "9a.png",
    "10a.png",
    "11a.png",
    "12a.png",
    "13a.png",
    "14a.png",
    "15a.png",
    "16a.png",
    "17a.png",
    "18a.png",
    "19a.png",
    "20a.png",
    "21a.png",
    "22a.png",
    "23a.png",
    "24a.png",
    "25a.png",
  ];
  
  const textColors = [
    "#FF0000",
    "#00FF00", 
    "#0000FF", 
      "#FF0000", 
      "#00FF00", 
      "#0000FF", 
      "#000080", 
      "#00FFFF", 
      "#00FF00", 
      "#C0C0C0", 
      "#FF00FF", 
      "#000080", 
      "#808000", 
      "#008080", 
      "#00FFFF", 
      "#FFA500", 
      "#63D1F4", 
      "#7B3F00", 
      "#8B008B", 
      "#C1F0F6", 
      "#CCCC00", 
      "#CDE472", 
      "#D1EEEE", 
      "#FFB00F",
      "#9fc8e5",
  ];

  // Pilih secara acak satu nama file gambar dari daftar
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomImageIndex];
  const selectedColor = textColors[randomImageIndex];
  

  const img = await canvas.loadImage(`./${selectedImage}`);

  let userPfp = await resolveImage(member.user.displayAvatarURL({
      extension: "jpg",
      size: 1024
  }));
  let namee = member.user.username;
  let image = new Canvas(994, 198)
  .printImage(img, 0, 0, 994, 198)
  .setColor(selectedColor) // Menggunakan warna yang sesuai
  .setTextFont('54px sans-serif')
  .printWrappedText(namee, 252, 102)
  .printCircularImage(userPfp, 146, 97, 67, 67)
  .toBuffer();

  client.channels.cache.get(chx).send({
      content: `See you soon, <@${member.user.id}>!`,
      files: [image]
  });
});



// Login to the bot
if (!config.Botconfig.token) {
  console.log("\x1b[31m%s\x1b[0m", "Please provide a bot token in the .env file");
  process.exit(1);
} else {
  client.login(config.Botconfig.token);
}