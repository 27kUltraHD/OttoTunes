/*
    Stop voice connection if there is one.
*/
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');

module.exports = class stop_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'stop',
            aliases:['end'],
            group: 'music',
            memberName: 'stop',
            description: 'stops current play connection',
            example: '~stop',

        });
    }
    
    run(msg, {text}){
        var check_valid_channels = util.check_right_channels(msg);
            if( !check_valid_channels)
                return;
        var voice_channel = msg.member.voiceChannel;
        var dispatcher = voice_channel.connection.dispatcher;
            if(dispatcher) 
                dispatcher.end();
    }
}
 