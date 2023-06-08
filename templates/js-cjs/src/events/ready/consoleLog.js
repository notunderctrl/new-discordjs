const { Client } = require('discord.js');

/**
 * Event handling guide: https://djs-commander.underctrl.io/events/creating-events
 * 
 * @param { Client } c 
 * @param { Client } client
 */
module.exports = (c, client) => {
  console.log(`${c.user.username} is online.`);
}