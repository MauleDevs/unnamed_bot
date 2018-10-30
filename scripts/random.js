/*
Description:
Returns a random option.
*/
module.exports = function(robot) {
  robot.respond(/random (.*)/i, function(msg) {
    const options = msg.match[1].split(',')
    msg.send(msg.random(options));
  });
};