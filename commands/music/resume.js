/*
    Resumes voice connection if there is one.
*/
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');

module.exports = class resume_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'resume',
            group: 'music',
            memberName: 'resume',
            description: 'resumes current play connection',
            example: '~resume',
        });
    }

    run(msg, {text}){ 
        var check_valid_channels = util.check_right_channels(msg);
            if( !check_valid_channels) 
                return;
        var voice_channel = msg.member.voiceChannel;
        var dispatcher = voice_channel.connection.dispatcher;
            if(dispatcher) 
                dispatcher.resume();
            else{
                msg.reply("Nothing to resume playing");
                return;
            }
        }
}
 