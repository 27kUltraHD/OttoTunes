/*const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');

module.exports = class mute_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'mute',
            aliases:['silence'],
            group: 'random',
            memberName: 'mute',
            description: 'mute a certain person',
            example: '~mute',
        });
    }

   run(msg, {text}){
       
    var check_valid_channels = util.check_right_channels(msg);
        if( !check_valid_channels) return;
        
    var voice_channel = msg.member.voiceChannel;

    voice_channel.leave();
    msg.delete();
   }
}
 
*/