require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  Botconfig: {
    token: process.env.BOT_TOKEN,
    clientid: process.env.CLIENT_ID,
    guildid: process.env.GUILD_ID,
    welcomeChannelID: "1091287764252753981",
    farewellChannelID: "1091212076246110248",
  },

  Image: {
    background: "https://i.imgur.com/VdmSsLY.png",
    titlemessagecolor: "#fff474",
    welcomeDescription: "Let's play and chit chat together!!",
    farewellDescription: "See you soon, We'll miss you!",
    descriptioncolor: "#ffffff",
    bordercolor: "#fd9a73",
    avatarbordercolor: "#1d1b1b",
   // overlayopacity: 0.3,
  },

  Presence: {
    status: "idle", //Put your bot status here (online, idle, dnd, invisible)
    activity: "Made by Tragic", //Put your bot activity here (playing, streaming, listening, watching)
    type: "WATCHING", //Put your bot activity type here (PLAYING, STREAMING, LISTENING, WATCHING)
},
};