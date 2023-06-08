const { Message, Client } = require('discord.js');

/**
 * Event handling guide: https://djs-commander.underctrl.io/events/creating-events
 * 
 * @param { Message } message 
 * @param { Client } client
 */
module.exports = (message, client) => {
  if (message.content === 'hello') {
    message.reply('Hi!');
  }
}