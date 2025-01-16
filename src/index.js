const { Client, GatewayIntentBits } = require('discord.js');
const config = require('../bot.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);
