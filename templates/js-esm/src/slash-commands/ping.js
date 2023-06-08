import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import { CommandHandler } from 'djs-commander';

const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Reply with Pong!');

/**
 * Command handling guide: https://djs-commander.underctrl.io/commands/creating-commands
 *
 * @param { Object } param0 - The parameter object.
 * @param { ChatInputCommandInteraction } param0.interaction - The interaction object.
 * @param { Client } param0.client - The Discord client object.
 * @param { CommandHandler } param0.handler - The command handler object.
 */
function run({ interaction, client, handler }) {
  interaction.reply(':ping_pong: Pong!');
}

export default {
  data,
  run,
  // deleted: true
};
