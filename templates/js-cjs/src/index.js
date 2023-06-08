require('dotenv/config');
const { Client } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const intents = require('./intents');
const path = require('path');

const client = new Client({ intents });

const token = process.env.TOKEN;

if (!token) {
  throw new Error("No token was provided. Ensure your .env file has the 'TOKEN' variable set to your bot's token");
}

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'slash-commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
});

client.login(token);
