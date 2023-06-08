import { Message, Client } from 'discord.js';

/**
 * Event handling guide: https://djs-commander.underctrl.io/events/creating-events
 *
 * @param { Message } message
 * @param { Client } client
 */
export default (message, client) => {
  if (message.content === 'hello') {
    message.reply('Hi!');
  }
};
