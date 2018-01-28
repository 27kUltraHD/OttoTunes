/*
    OttoTunes created by 27kUltraHD
*/
const commando = require('discord.js-commando');
const path = require('path');
const winston = require('winston');
const settings = require('./utilities/settings.json');

const token = settings.token;
const clientId = settings.clientId;
const server_name = settings.server_name;
const text_channel_name = settings.text_channel_name;
const voice_channel_name = settings.voice_channel_name;

const client = new commando.Client({
    owner: '205979169882898432',
    autoReconnect: true, 
    commandPrefix:'~',
});

client
    .on('error', winston.error)
    .on('warn', winston.warn)
    .on('debug', winston.debug)
    .on("ready", () => {
        console.log("ready");
        
            client.user.setActivity("deez nuts");
            console.log("Connected!");
    
    });

client.login(token);

client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('music', 'Music');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');