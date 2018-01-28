/*
    Contains functions in aiding with commands within 'music'

    ****NEED TO UPDATE AND SEE WHY voice_channel.name and text_channel.name is undefined*****
*/
var settings = require('./settings.json');

//checks if user is in channel 'music' and typing bot commands in text channel 'botspam'
var exports = module.exports = {};

exports.check_right_channels = function (msg){

var voice_channel = msg.member.voiceChannel;
var text_channel = msg.channel;

var voice_name = settings.voice_channel_name;
var text_name = settings.text_channel_name;

 if(voice_channel.name !== voice_name){
    msg.reply("You need to be connected to the 'Music' channel prior to typing commands");
    msg.delete();
    return false;
   }
   else if(text_channel.name !== text_name){
    msg.reply("You type commands in the 'bot_spam' channel in order for the bot to recieve commands");
    msg.delete();
    return false;
}

    return true;
}

