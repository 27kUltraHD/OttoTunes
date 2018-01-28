/*
    skips a request video to queue.
*/
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');
var queue = require('../../utilities/queue.js');

module.exports = class skip_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'skip',
            aliases:['next'],
            group: 'music',
            memberName: 'skip',
            description: 'Takes user input and searches for the song to skip to queue.',
            example: '~skip A$AP Rocky',
            args:[
                {
                    key:'text',
                    prompt:'What song do you want to skip?',
                    type:'string'
                }
            ]
        });
    }

   async run(msg, {text}){

    var check_valid_channels = util.check_right_channels(msg);
    if( !check_valid_channels) return;

    var voice_channel = msg.member.voiceChannel;

    var next = queue[0];
    var url = queue[0].url;
    var title = queue[0].title;

    msg.reply('Now playing: ' + title);
    msg.reply(url);
 
    var connection = voice_channel.connection;

    if(connection.speaking()){
        msg.reply("Please wait until the current song is done.");
        return;
    }
       
    voice_channel.join()
        .then(connection => {
            var stream = ytdl(url);
            var dispatcher = connection.playStream(stream, streamOptions);
            ;}).catch(console.error);

   }
   
}