/*
    Checks if there is audio dispatching. If not, notify user.
*/
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');

module.exports = class pause_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'pauses current play connection',
            example: '~pause',

        });
    }

    run(msg, {text}){
        var check_valid_channels = util.check_right_channels(msg);
            if( !check_valid_channels) return;
        var voice_channel = msg.member.voiceChannel;
        var dispatcher = voice_channel.connection.dispatcher;  
            if(dispatcher) 
                dispatcher.pause();
            else{
                msg.reply("There is nothing currently being streamed");
                return;
            }
        }
}
 