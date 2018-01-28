/*
    Handles music being added to a queue
*/

var exports = module.exports = {};

var queue = [];
const max_size = 10;

exports.add_video = function (video){
    queue.push(video);
}

exports.play_next_video = function (){

}