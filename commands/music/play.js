/*
    Creates instance, searches youtube for parameters given and streams it.
    If the user is not typing the command, 
*/
//Required Libs
const Commando = require('discord.js-commando');
const YouTube = require('discord-youtube-api');
const ytdl = require('ytdl-core');
const youtube_api_key = require('../../utilities/settings.json').youtube_api_key;
const info = require('../../index.js');
const streamOptions = { seek: 0, volume: 1 };
//create an instance of youtube API client
const youtube = new YouTube(youtube_api_key);
var util = require('../../utilities/utilities.js');

module.exports = class play_music_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'play',
            aliases:['search'],
            group: 'music',
            memberName: 'play',
            description: 'Takes user input and searches for the song to add to queue.',
            example: '~play A$AP Rocky',
            args:[
                {
                    key:'text',
                    prompt:'What song do you want to play?',
                    type:'string'
                }
            ]
        });
    }

   async run(msg, {text}){
/*
   var check_valid_channels = util.check_right_channels(msg);
   if( !check_valid_channels) return;
*/
   var name = msg.member.voiceChannel.name;
   console.log(name);

    var voice_channel = msg.member.voiceChannel;
    var text_channel = msg.channel;

    var request = await youtube.searchVideos(text, 1);
    var url = request.url;
    var title = request.title;

    msg.reply('Searching...');
    msg.reply('Now playing: ' + title);
    msg.reply(url);
 
    voice_channel.join()
        .then(connection => {
            var stream = ytdl(url);
            var dispatcher = connection.playStream(stream, streamOptions);
            ;}).catch(console.error);


    }
}