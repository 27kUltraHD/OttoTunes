/*
    Rolls a 6 sided dice
*/

const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a dice'
        });
    }

    async run(message, args){
        var check_valid_channels = util.check_right_channels(msg);
        if( !check_valid_channels) return;

        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;