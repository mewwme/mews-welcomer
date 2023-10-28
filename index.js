// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, WebhookClient, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();
const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas');
const memberAddWebhook = new WebhookClient({
  id: '1167657537718456381',
  token: 'Qubg9ekEaOcewh0KMq0GcJCQmMz6XyWBOxjbUCZzPHvy6TxBB_aRZ0GbGZRlJ0PB9Xgu'
});
const memberRemoveWebhook = new WebhookClient({
  id: '1167657690877657138',
  token: 'BBLH0wttavTRvZzrkrRsGZDXWwQSKZ6zsIAefYHEl8sbmk9MXSfc0b-6TxchQsxybLZt'
});




require('dotenv').config();
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
  let chx = "1091287764252753981";
  if (chx === null) {
    return;
  }

  const greetings = ["Hello,", "Hallo,", "Welkom,", "Heyho,", "Welcome,", "Karibu", "Hola,", "Willkommen,", "Namaste,", "Punten,", "Bienvenue,", "Salam,"];
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

  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomImageIndex];
  const selectedColor = textColors[randomImageIndex];
  


  const img = await canvas.loadImage(`./${selectedImage}`);
  const userPfp = await resolveImage(member.user.displayAvatarURL({
    extension: "jpg",
    size: 1024
  }));
  const namee = `${randomGreeting} ${member.user.username}`; // Gabungkan kata sambutan acak dengan nama pengguna

  const image = new Canvas(994, 198)
    .printImage(img, 0, 0, 994, 198)
    .setColor(selectedColor)
    .setTextFont('54px sans-serif')
    .printWrappedText(namee, 252, 102)
    .printCircularImage(userPfp, 146, 97, 67, 67)
    .toBuffer();

  memberAddWebhook.send({
    content: `Haii, welcome <@${member.id}>! <a:madebytragic_anime:1167631515094626365>
    Explore the server as much as you want! Please, no harassment, racism, or bullying. Other than that, welcome fellow user!
    Don't forget to read the rules and take on your assigned role. Have fun! <a:madebytragic_heart:1167631616978460682>`,
    files: [image]
  }).catch(error => {
    console.error(error);
  });
});

  client.on("guildMemberRemove", async member => {
    const chx = "1091212076246110248"; // Ganti dengan ID channel yang ingin Anda gunakan.
    if (chx === null) {
      return;
  }
  
  const greetings = ["Goodbye,", "Adiós,", "Au revoir,", "Bye,", "Adeus,", "Vaarwel,", "Farvel,", "Sayōnara,", "Jig Mantog,", "Keluar,", "Jol,", "Mantog,"];
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

  // Pilih kata sambutan secara acak
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Pilih gambar dan warna teks secara acak
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomImageIndex];
  const selectedColor = textColors[randomImageIndex];

  const img = await canvas.loadImage(`./${selectedImage}`);
  const userPfp = await resolveImage(member.user.displayAvatarURL({
    extension: "jpg",
    size: 1024
  }));
  const namee = `${randomGreeting} ${member.user.username}`; // Gabungkan kata sambutan acak dengan nama pengguna

  const image = new Canvas(994, 198)
    .printImage(img, 0, 0, 994, 198)
    .setColor(selectedColor)
    .setTextFont('54px sans-serif')
    .printWrappedText(namee, 252, 102)
    .printCircularImage(userPfp, 146, 97, 67, 67)
    .toBuffer();

    memberRemoveWebhook.send({
      content: `See you soon, <@${member.user.id}>!`,
      files: [image]
    });
  });



// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);