import 'dotenv/config';
import { Client } from 'discord.js';
import { CommandHandler } from 'djs-commander';
import { fileURLToPath } from 'url';
import intents from './intents.js';
import path from 'path';

const client = new Client({ intents });

const token = process.env.TOKEN;

if (!token) {
  throw new Error("No token was provided. Ensure your .env file has the 'TOKEN' variable set to your bot's token");
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'slash-commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
});

client.login(token);
