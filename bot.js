/******************************************************
 * Self-Bot
 * Version 1.0.0
 * Shadow
 ******************************************************/

//---------------------------------------------------------------------
//#region Imports
//---------------------------------------------------------------------

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();
const config = require("./lib/config.json");

//#endregion

//---------------------------------------------------------------------
//#region Running the Bot
//---------------------------------------------------------------------

client.on("ready", async () => {
  console.log("Bot is Ready!");
});

client.login(config.token);

//#endregion

//---------------------------------------------------------------------
//#region Loading Modules
//---------------------------------------------------------------------

client.on("ready", async () => {
  const startAutoBump = require("./lib/modules/autoBump"); // import module
  startAutoBump(client); // start module

  // const startSendMessage = require("./lib/modules/sendMessage"); // import module
  // startSendMessage(client); // start module

  // other modules...
});

//#endregion
