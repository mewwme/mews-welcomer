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
  const images = [
    "https://cdn.is-a.fun/welgood/1.png",
    "https://cdn.is-a.fun/welgood/2.png",
    "https://cdn.is-a.fun/welgood/3.png",
    "https://cdn.is-a.fun/welgood/4.png",
    "https://cdn.is-a.fun/welgood/5.png",
    "https://cdn.is-a.fun/welgood/6.png",
    "https://cdn.is-a.fun/welgood/7.png",
    "https://cdn.is-a.fun/welgood/8.png",
    "https://cdn.is-a.fun/welgood/9.png",
    "https://cdn.is-a.fun/welgood/10.png",
    "https://cdn.is-a.fun/welgood/11.png",
    "https://cdn.is-a.fun/welgood/12.png",
    "https://cdn.is-a.fun/welgood/13.png",
    "https://cdn.is-a.fun/welgood/14.png",
    "https://cdn.is-a.fun/welgood/15.png",
    "https://cdn.is-a.fun/welgood/16.png",
    "https://cdn.is-a.fun/welgood/17.png",
    "https://cdn.is-a.fun/welgood/18.png",
    "https://cdn.is-a.fun/welgood/19.png",
    "https://cdn.is-a.fun/welgood/20.png",
    "https://cdn.is-a.fun/welgood/21.png",
    "https://cdn.is-a.fun/welgood/22.png",
    "https://cdn.is-a.fun/welgood/23.png",
    "https://cdn.is-a.fun/welgood/24.png",
    "https://cdn.is-a.fun/welgood/25.png",
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
  const namee = `${randomGreeting} ${member.user.username}`;

  const image = new Canvas(994, 198)
    .printImage(img, 0, 0, 994, 198)
    .setColor(selectedColor)
    .setTextFont('54px sans-serif')
    .printWrappedText(namee, 252, 102)
    .printCircularImage(userPfp, 146, 97, 67, 67)
    .toBuffer();

  memberAddWebhook.send({
    content: `Haii, welcome <a:tragic5:1169269912989089872> <@${member.id}>! <a:tragic5:1169269912989089872>
    Explore the server as much as you want! Please, no harassment, racism, or bullying. Other than that, welcome fellow user!
    <a:tragic1:1169254852065513482> Don't forget to read the rules and take on your assigned role. Have fun!`,
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
  const images = [
    "https://cdn.is-a.fun/welgood/1.png",
    "https://cdn.is-a.fun/welgood/2.png",
    "https://cdn.is-a.fun/welgood/3.png",
    "https://cdn.is-a.fun/welgood/4.png",
    "https://cdn.is-a.fun/welgood/5.png",
    "https://cdn.is-a.fun/welgood/6.png",
    "https://cdn.is-a.fun/welgood/7.png",
    "https://cdn.is-a.fun/welgood/8.png",
    "https://cdn.is-a.fun/welgood/9.png",
    "https://cdn.is-a.fun/welgood/10.png",
    "https://cdn.is-a.fun/welgood/11.png",
    "https://cdn.is-a.fun/welgood/12.png",
    "https://cdn.is-a.fun/welgood/13.png",
    "https://cdn.is-a.fun/welgood/14.png",
    "https://cdn.is-a.fun/welgood/15.png",
    "https://cdn.is-a.fun/welgood/16.png",
    "https://cdn.is-a.fun/welgood/17.png",
    "https://cdn.is-a.fun/welgood/18.png",
    "https://cdn.is-a.fun/welgood/19.png",
    "https://cdn.is-a.fun/welgood/20.png",
    "https://cdn.is-a.fun/welgood/21.png",
    "https://cdn.is-a.fun/welgood/22.png",
    "https://cdn.is-a.fun/welgood/23.png",
    "https://cdn.is-a.fun/welgood/24.png",
    "https://cdn.is-a.fun/welgood/25.png",
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
  const namee = `${randomGreeting} ${member.user.username}`;

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