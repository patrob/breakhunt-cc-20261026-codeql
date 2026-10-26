const { writeTemp } = require('./writeTmp');
function handle(input) {
  // baseline: no user-controlled flow into sink yet
  return writeTemp('static');
}
module.exports = { handle };
