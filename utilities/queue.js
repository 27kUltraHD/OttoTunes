/*
    Handles music being added to a queue
*/

var exports = module.exports = {};

var queue = [];
const max_size = 10;

exports.add_video = function (video){
    if(queue.length === 10){
        throw "Max queue size reached. ";
        return;
    }

    queue.push(video);
}

exports.display_queue = function (msg) {

    for(var i = 0; i < queue.length; ++i){
        var title = queue[i].title;

        msg.channel.sendMessage((i + 1) + ". " + title);
    }
}
