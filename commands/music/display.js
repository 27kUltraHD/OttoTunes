/*
    Checks if there is audio dispatching. If not, notify user.
*/
const Commando = require('discord.js-commando');
const util = require('../../utilities/utilities.js');
var queue = require('../../utilities/queue.js');

module.exports = class display_queue_command extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'display',
            group: 'music',
            memberName: 'display',
            description: 'displays queue',
            example: '~display',

        });
    }

    run(msg, {text}){
        var check_valid_channels = util.check_right_channels(msg);
            if( !check_valid_channels) return;
        
        queue.display_queue(msg);
    }
}
 