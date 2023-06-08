import { Client } from 'discord.js';

/**
 * Event handling guide: https://djs-commander.underctrl.io/events/creating-events
 *
 * @param { Client } c
 * @param { Client } client
 */
export default (c, client) => {
  console.log(`${c.user.username} is online.`);
};
