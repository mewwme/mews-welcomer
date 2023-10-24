// Require the necessary discord.js classes
const { Discord, MessageAttachment, Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas');


const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
  

client.on("guildMemberAdd", async member => {
  const chx = "1091287764252753981";
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
  .setColor(selectedColor)
  .setTextFont('54px sans-serif')
  .printWrappedText(namee, 252, 102)
  .printCircularImage(userPfp, 146, 97, 67, 67)
  .toBuffer();

  client.channels.cache.get(chx).send({
    content: `Haii, welcome <3 <@${member.id}>! 
    We're excited to have you join our community! Before you begin, please follow these steps:
  
    ➣ **Read the Rules**: Familiarize yourself with our community guidelines and regulations here <#1088032924869349409> .
    ➣ **Choose Your Role**: To access all server features, including exclusive channels and events, select your role in the <#1091200958337396737> .
    ➣ **Say Hi**: Introduce yourself in the <#1088037928091009095> . We'd love to get to know you better!
    
    By following these steps, you'll have a smooth start in our community and can fully enjoy your time with us. 🚀`,
    files: [image]
  }).then(() => {
    const developerbutton = new ButtonBuilder()
      .setLabel('Oh!BOTLiST')
      .setURL('https://ohbotlist.hop.sh/')
      .setStyle(ButtonStyle.Link);
  
    const actionRow = new ActionRowBuilder().addComponents(developerbutton);
  
    client.channels.cache.get(chx).send({
      components: [actionRow]
    });
  }).catch(error => {
    console.error(error);
  });
  

  client.on("guildMemberRemove", async member => {
    const chx = "1091212076246110248"; // Ganti dengan ID channel yang ingin Anda gunakan.
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



// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN)});