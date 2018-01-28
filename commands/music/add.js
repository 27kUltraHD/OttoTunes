/*
    Adds a request video to queue.
*/
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
var util = require('../../utilities/utilities.js');
var queue = require('../../utilities/queue.js');

module.exports = class add_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'add',
            aliases:['addd'],
            group: 'music',
            memberName: 'add',
            description: 'Takes user input and searches for the song to add to queue.',
            example: '~add A$AP Rocky',
            args:[
                {
                    key:'text',
                    prompt:'What song do you want to add?',
                    type:'string'
                }
            ]
        });
    }

   async run(msg, {text}){

    //var check_valid_channels = util.check_right_channels(msg);
   // if( !check_valid_channels) return;
    var name = msg.member.voiceChannel.name;
    console.log(name);
    /*
    var voice_channel = msg.member.voiceChannel;

    var request = await youtube.searchVideos(text, 1);
    var url = request["url"];
    var title = request["title"];
    
    msg.reply('Searching...');
    msg.reply('Now adding: ' + title);
    msg.reply(url);

    queue.add_video(request);
    */
   }
}