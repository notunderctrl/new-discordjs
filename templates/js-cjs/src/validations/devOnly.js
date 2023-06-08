const { ChatInputCommandInteraction, Client } = require('discord.js');
const { CommandHandler, CommandObj } = require('djs-commander');

/**
 * Slash commands validation guide: https://djs-commander.underctrl.io/validations/creating-validations
 *
 * @param { ChatInputCommandInteraction } interaction
 * @param { CommandObj } commandObj
 * @param { CommandHandler } handler
 * @param { Client } client
 */
module.exports = (interaction, commandObj, handler, client) => {
  if (commandObj.devOnly) {
    if (interaction.user.id !== 'your-user-id') {
      interaction.reply({
        content: 'Only developers are allowed to execute this command.',
        ephemeral: true,
      });

      return true; // Required to make sure to slash command is not executed.
    }
  }
};
